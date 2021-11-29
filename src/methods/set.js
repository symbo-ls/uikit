'use strict'

import CONFIG, { CSS_VARS } from '../factory'
import { FONT, FONT_FAMILY_TYPES } from '../config'
import { isArray, colorStringToRgbaArray, isObject, isString, isObjectLike, getColorShade, hexToRgbArray, rgbArrayToHex } from '../utils'

const setColor = (val, key) => {
  const [r, g, b, a = 1] = colorStringToRgbaArray(val.value || val)
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

  const [name, alpha, tone] = isArray(value) ? value : value.split(' ')
  const { COLOR, GRADIENT } = CONFIG
  const val = COLOR[name] || GRADIENT[name]

  if (!val) {
    console.warn('Can\'t find color', name)
    return value
  }

  // TODO: support variables
  // if (alpha) return `rgba(var(${val[shade || ''].var}), ${modifier})`

  let rgb = val.rgb
  if (rgb) {
    if (tone) {
      if (!val[tone]) {
        const toHex = rgbArrayToHex(rgb.split(', '))
        rgb = hexToRgbArray(getColorShade(toHex, tone)).join(', ')
        val[tone] = { rgb, var: `${val.var}-${tone}` }
      } else rgb = val[tone].rgb
    }
    if (alpha) return `rgba(${val.rgb}, ${alpha})`
    return `rgb(${rgb})`
  } else return val.value
}

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
  console.log(factory, value)
  // const { name, fontWeight, ...rest } = value
  // if (factory[name]) {
  //   factory[name][fontWeight || 400] = rest
  // } else {
  //   factory[name] = {
  //     [fontWeight || 400]: rest
  //   }
  // }
  return { var: factory }
}

const setFontFamily = (factory, value) => {
  // const { name, type } = value
  // let { family } = value
  // if (!family) family = Object.keys(FONT)
  // if (isArray(family)) family = family.join(', ')
  // factory[name] = `${family}, ${FONT_FAMILY_TYPES[type || 'serif']}`
  // if (!factory.default) factory.default = name
  return { var: factory }
}

export const SETTERS = {
  color: setColor,
  gradient: setGradient,
  font: setFont,
  font_family: setFontFamily,
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
  const FACTORY = CONFIG[FACTORY_NAME]
  const result = SETTERS[factoryName](value, key)
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
