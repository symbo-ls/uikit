'use strict'

import { getColor } from './color'
import { CONFIG, CSS_VARS } from '../factory' // eslint-disable-line

import {
  isObject,
  isString,
  isObjectLike
} from '../utils'

const ENV = process.env.NODE_ENV

const setThemeValue = theme => {
  const value = {}
  const { state, variants, helpers, ...rest } = theme
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
  const { THEME } = CONFIG

  if (isString(value)) {
    const [theme, subtheme] = value.split(' ')
    const isOurTheme = THEME[theme]
    if (isOurTheme) {
      if (!subtheme && !modifier) return getThemeValue(isOurTheme)
      value = [theme, subtheme || modifier]
    }
  } // else value = [value, modifier]

  if (isObjectLike(value) && value[1]) {
    const themeName = value[0]
    const subThemeName = value[1]
    const { helpers, variants, state } = THEME[themeName]

    if (variants && variants[subThemeName]) return getThemeValue(variants[subThemeName])
    if (helpers && helpers[subThemeName]) return getThemeValue(helpers[subThemeName])
    if (state && state[subThemeName]) return getThemeValue(state[subThemeName])
  } else if (isObject(value)) return setThemeValue(value)

  if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose) console.warn('Can\'t find theme', value)
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

const goThroughInteractiveStates = (theme, value) => {
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
  // console.log(variant)
  themeValue[`@media (prefers-color-scheme: ${key})`] = result
  if (isObject(variant) && !variant.value) variant.value = result
}

const goThroughVariants = (theme, value) => {
  const { variants } = theme
  if (!variants) return
  const keys = Object.keys(variants)
  keys.map(key => {
    const variant = variants[key]
    // console.log('=========')
    // console.log(theme, key, variant, value)
    if (key === 'dark' || key === 'light') setPrefersScheme(theme, key, variant, value)
    if (key === 'inverse') setInverseTheme(theme, variant, value)
    return theme
  })
  return theme
}

const goThroughHelpers = (theme, value) => {
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
  const { state, variants, helpers } = val
  const value = setThemeValue(val, key)
  const CSSvar = `--theme-${key}`

  goThroughInteractiveStates(val, value)
  goThroughVariants(val, value)
  goThroughHelpers(val, value)

  return { var: CSSvar, value, state, variants, helpers }
}
