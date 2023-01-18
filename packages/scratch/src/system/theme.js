'use strict'

import { getColor } from './color'
import { getActiveConfig } from '../factory'

import {
  isObject,
  isString,
  isObjectLike,
  isArray
} from '@domql/utils'

const ENV = process.env.NODE_ENV // eslint-disable-line

const setThemeValue = theme => {
  const value = {}
  const { state, media, helpers, ...rest } = theme
  const keys = Object.keys(rest)
  keys.map(key => {
    const conditions = ['color', 'Color', 'background', 'border']
    const isColor = conditions.some(k => key.includes(k))
    return (value[key] = isColor ? getColor(theme[key]) : theme[key])
  })
  return value
}

const getThemeValue = theme => {
  if (theme.value) return theme.value
  theme.value = setThemeValue(theme)
  return theme.value
}

export const getTheme = (value, modifier) => {
  const CONFIG = getActiveConfig()
  if (CONFIG.useVariable) return getMediaTheme(value, modifier)
  const { THEME } = CONFIG

  if (isString(value)) {
    const [theme, subtheme] = value.split(' ')
    const isOurTheme = THEME[theme]
    if (isOurTheme) {
      if (!subtheme && !modifier) return getThemeValue(isOurTheme)
      value = [theme, subtheme || modifier]
    }
  }

  if (isObjectLike(value) && value[1]) {
    const themeName = value[0]
    const subThemeName = value[1]
    const { helpers, media, state } = THEME[themeName]

    if (media && media[subThemeName]) return getThemeValue(media[subThemeName])
    if (helpers && helpers[subThemeName]) return getThemeValue(helpers[subThemeName])
    if (state && state[subThemeName]) return getThemeValue(state[subThemeName])
  } else if (isObject(value)) return setThemeValue(value)
}

const setInverseTheme = (theme, variant, value) => {
  if (isObject(variant)) {
    theme.variants.inverse.value = setThemeValue(variant)
  } else if (variant === true) {
    const { color, background } = value
    theme.variants.inverse = {
      value: {
        color: background,
        background: color
      }
    }
  }
}

const setPseudo = (theme, key, variant, themeValue) => {
  const result = getTheme(variant)
  themeValue[`&:${key}`] = result
  if (isObject(variant) && !variant.value) variant.value = result
}

const setSelectors = (theme, value) => {
  const { state } = theme
  if (!state) return
  const keys = Object.keys(state)
  keys.map(key => {
    const variant = state[key]
    setPseudo(theme, key, variant, value)
    return theme
  })
  return theme
}

const setPrefersScheme = (theme, key, variant, themeValue) => {
  const result = getTheme(variant)
  themeValue[`@media (prefers-color-scheme: ${key})`] = result
  if (isObject(variant) && !variant.value) variant.value = result
}

const setMedia = (theme, value) => {
  const { media } = theme
  if (!media) return
  const keys = Object.keys(media)
  keys.map(key => {
    const variant = media[key]
    if (key === 'dark' || key === 'light') setPrefersScheme(theme, key, variant, value)
    if (key === 'inverse') setInverseTheme(theme, variant, value)
    return theme
  })
  return theme
}

const setHelpers = (theme, value) => {
  const CONFIG = getActiveConfig()
  const { helpers } = theme
  if (!helpers) return
  const keys = Object.keys(helpers)
  keys.map(key => {
    const helper = helpers[key]
    if (isString(helper)) helpers[key] = CONFIG.THEME[helper]
    else getThemeValue(helpers[key])
    return theme
  })
  return theme
}

export const setTheme = (val, key) => {
  const CONFIG = getActiveConfig()
  if (CONFIG.useVariable) return setMediaTheme(val, key)

  const { state, media, helpers } = val
  const value = setThemeValue(val, key)
  const CSSvar = `--theme-${key}`

  setSelectors(val, value)
  setMedia(val, value)
  setHelpers(val, value)

  return { var: CSSvar, value, state, media, helpers }
}

const keySetters = { // eslint-disable-line
  '@': (theme, value) => setMedia(theme, value),
  ':': (theme, value) => setSelectors(theme, value),
  '.': (theme, value) => setHelpers(theme, value)
}

export const setMediaTheme = (val, key, suffix, prefers) => {
  const CONFIG = getActiveConfig()
  const { CSS_VARS } = CONFIG
  const theme = { value: val }

  if (isObjectLike(val)) {
    for (const param in val) {
      const symb = param.slice(0, 1)
      const value = val[param]
      if (symb === '@' || symb === ':' || symb === '.') {
        const hasPrefers = symb === '@' && param
        theme[param] = setMediaTheme(value, key, param, prefers || hasPrefers)
      } else {
        const color = getColor(value, prefers)
        const metaSuffixes = [...new Set([prefers, suffix].filter(v => v).map(v => v.slice(1)))]
        const varmetaSuffixName = metaSuffixes.length ? '-' + metaSuffixes.join('-') : ''
        const CSSVar = `--theme-${key}${varmetaSuffixName}-${param}`
        if (CONFIG.useVariable) {
          CSS_VARS[CSSVar] = color
          theme[param] = `var(${CSSVar})`
        } else {
          theme[param] = color
        }
        theme[`.${param}`] = { [param]: theme[param] }
      }
    }

    if (theme['background'] || theme['color'] || theme['backgroundColor']) {
      theme['.inversed'] = {
        color: theme['background'] || theme['backgroundColor'],
        background: theme['color']
      }
    }
  }

  if (isString(val) && val.slice(0, 2) === '--') {
    const { THEME } = CONFIG
    const value = THEME[val.slice(2)]
    const getReferenced = getMediaTheme(value)
    return getReferenced
  }

  return theme
}

const recursiveTheme = val => {
  const CONFIG = getActiveConfig()
  const obj = {}
  for (const param in val) {
    const symb = param.slice(0, 1)
    if (isObjectLike(val[param])) {
      if (symb === '@') {
        const query = CONFIG.MEDIA[param.slice(1)]
        const media = `@media screen and ${query}`
        obj[media] = recursiveTheme(val[param])
      } else if (symb === ':') {
        obj[`&${param}`] = recursiveTheme(val[param])
      }
    } else obj[param] = val[param]
  }
  return obj
}

const findModifierFromArray = (val, modifierArray) => {
  const currentMod = modifierArray.shift()
  if (val[currentMod]) return findModifierFromArray(val[currentMod], modifierArray)
  return val
}

const findModifier = (val, modifier) => {
  if (isArray(modifier)) return findModifierFromArray(val, modifier)
  else if (isString(modifier) && val[modifier]) return val[modifier]
  else return val
}

const checkForReference = (val, callback) => {
  if (isString(val) && val.slice(0, 2) === '--') return getMediaTheme(val.slice(2))
  return val
}

const checkThemeReference = (val) => checkForReference(val, checkThemeReference) // eslint-disable-line

export const getMediaTheme = (val, mod) => {
  const CONFIG = getActiveConfig()
  if (isString(val) && val.slice(0, 2) === '--') val = getMediaTheme(val.slice(2))

  if (!val || !isString(val)) {
    if (CONFIG.verbose) console.warn(val, '- theme is not string')
    return
  }

  const [name, ...modifier] = isArray(val) ? val : val.split(' ')
  let value = CONFIG.THEME[name]
  if (value && (modifier || mod)) {
    value = findModifier(value, modifier.length ? modifier : mod)
  }

  const r = recursiveTheme(value)
  return r
}
