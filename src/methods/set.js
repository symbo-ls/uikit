'use strict'

import { FONT, FONT_FAMILY_TYPES } from '../config'
import { isArray, colorStringToRGBAArray, isObject, isString, isObjectLike } from '../utils'

import CONFIG, { CSS_VARS } from '../factory'

const setColor = (val, key) => {
  const [r, g, b, a = 1] = colorStringToRGBAArray(val.value || val)
  const alpha = parseFloat(a.toFixed(2))
  const CSSVar = `--color-${key}`
  const rgb = `${r}, ${g}, ${b}`
  const value = `rgba(${rgb}, ${alpha})`

  return {
    var: CSSVar,
    rgb,
    alpha,
    value
  }
}

const setGradient = (val, key) => {
  const CSSVar = `--gradient-${key}`
  return {
    var: CSSVar,
    value: val.value || val
  }
}

export const getColor = value => {
  if (!isString(value)) return console.warn(value, '- type for color is not valid')

  const [name, modifier] = isArray(value) ? value : value.split(' ')
  const { COLOR, GRADIENT } = CONFIG
  const val = COLOR[name] || GRADIENT[name]

  if (!val) return console.warn('Can\'t find color', name)

  if (modifier && val.rgb) return `rgba(${val.rgb}, ${modifier})`
  // if (modifier) return `rgba(var(${val.var}), ${modifier})`
  else return val.value
}

const setThemeValue = theme => {
  const value = {}
  const { state, variants, helpers, ...rest } = theme
  const keys = Object.keys(rest)
  keys.map(key => (value[key] = getColor(theme[key])))
  return value
}

const getThemeValue = theme => {
  if (theme.value) return theme.value
  theme.value = setThemeValue(theme)
  return theme.value
}

export const getTheme = value => {
  const { THEME } = CONFIG
  if (isObjectLike(value) && value[1]) {
    const [themeName, subThemeName] = value
    const { helpers, variants } = THEME[themeName]
    if (variants && variants[subThemeName]) return getThemeValue(variants[subThemeName])
    if (helpers && helpers[subThemeName]) return getThemeValue(helpers[subThemeName])
  }
  if (isObject(value)) return setThemeValue(value)
  else if (isString(value) && THEME[value]) return getThemeValue(THEME[value])
  console.warn('Can\'t find theme', value)
}

const setPrefersScheme = (theme, key, variant, themeValue) => {
  const result = getTheme(variant)
  themeValue[`@media (prefers-color-scheme: ${key})`] = result
  if (isObject(variant) && !variant.value) variant.value = result
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

const goThroughVariants = (theme, value) => {
  const { variants } = theme
  if (!variants) return
  const keys = Object.keys(variants)
  keys.map(key => {
    const variant = variants[key]
    if (key === 'dark' || key === 'light') setPrefersScheme(theme, key, variant, value)
    if (key === 'inverse') setInverseTheme(theme, variant, value)
    return theme
  })
  return theme
}

const setTheme = (val, key) => {
  const { state, variants, helpers } = val
  const value = setThemeValue(val, key)

  goThroughVariants(val, value)
  goThroughHelpers(val, value)

  return { value, state, variants, helpers }
}

const setFont = (factory, value) => {
  const { name, fontWeight, ...rest } = value
  if (factory[name]) {
    factory[name][fontWeight || 400] = rest
  } else {
    factory[name] = {
      [fontWeight || 400]: rest
    }
  }
}

const setFontFamily = (factory, value) => {
  const { name, type } = value
  let { family } = value
  if (!family) family = Object.keys(FONT)
  if (isArray(family)) family = family.join(', ')
  factory[name] = `${family}, ${FONT_FAMILY_TYPES[type || 'serif']}`
  if (!factory.default) factory.default = name
}

export const SETTERS = {
  color: setColor,
  gradient: setGradient,
  font: setFont,
  'font-family': setFontFamily,
  theme: setTheme
}

/**
 *
 * @param {Object} FACTORY_NAME Defines which factory it goes to
 * @param {*} value Value of the property
 * @param {String} key Key, or the name of the property
 * @returns {Object} Factory
 */
export const setValue = (FACTORY_NAME, value, key) => {
  const factoryName = FACTORY_NAME.toLowerCase()
  const result = SETTERS[factoryName](value, key)
  const FACTORY = CONFIG[FACTORY_NAME]
  FACTORY[key] = result
  CSS_VARS[result.var] = result.value
  return FACTORY
}

// export const setColor =

// const getColor = value => {
//   const [ key, param ] = isArray(value) ? value : value.split(' ')
//   const color = COLOR[`--${key}`]
//   if (param) opacify
//   COLOR
// }

export const setEach = (factoryName, props) => {
  const FACTORY_NAME = factoryName.toUpperCase()
  const keys = Object.keys(props)
  keys.map(key => setValue(FACTORY_NAME, props[key], key))
  return CONFIG[FACTORY_NAME]
}

export const set = config => {
  const keys = Object.keys(config)
  keys.map(key => setEach(key, config[key]))
  return CONFIG
}

export default set
