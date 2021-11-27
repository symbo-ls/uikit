'use strict'

import { FONT, FONT_FAMILY_TYPES } from '../config'
import { isArray, colorStringToRGBAArray, isObject } from '../utils'

import CONFIG, { CSS_VARS } from '../factory'

const defineColor = () => {}

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

const getColor = value => {
  const [name, modifier] = isArray(value) ? value : value.split(' ')
  const { COLOR, GRADIENT } = CONFIG
  const val = COLOR[name] || GRADIENT[name]

  if (modifier) return `rgba(${val.rgb}, ${modifier})`
  // if (modifier) return `rgba(var(${val.var}), ${modifier})`
  else return val.value
}

const setPrefersScheme = (value, theme) => {
  if (!isObject(theme)) return
  const themeKeys = Object.keys(theme)
  if (themeKeys.length) {
    themeKeys.map(key => (value[`@media (prefers-color-scheme: ${key})`] = setTheme(theme[key]).value))
  }
}

const setTheme = (val, key) => {
  const value = {}
  const { state, theme, helpers, inverse, ...rest } = val
  const keys = Object.keys(rest)
  keys.map(key => (value[key] = getColor(val[key])))

  setPrefersScheme(value, theme)

  return { value }
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
const setValue = (FACTORY_NAME, value, key) => {
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
