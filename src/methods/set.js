'use strict'

import { COLOR, GRADIENT, THEME, FONT, FONT_FAMILY, FONT_FAMILY_TYPES } from '../config'
import { isArray, opacify, colorStringToRGBAArray } from '../utils'

import CONFIG, { CSS_VARS } from '../factory'

const defineColor = () => {}

const setColor = (val, key) => {
  const [ r, g, b, a = 1 ] = colorStringToRGBAArray(val.value || val)
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

const setGradient = (value, key) => {
  const CSSVar = `--color-${key}`
  return {
    var: CSSVar,
    value
  }
}

const setFont = (factory, value) => {
  var { name, fontWeight, ...rest } = value
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
  'font-family': setFontFamily
}

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
