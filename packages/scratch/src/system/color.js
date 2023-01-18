'use strict'

import { getActiveConfig } from '../factory'
import { isObject, isArray, isString } from '@domql/utils'

import {
  colorStringToRgbaArray,
  rgbToHSL,
  hexToRgbArray,
  rgbArrayToHex,
  hslToRgb,
  getColorShade
} from '../utils'

export const getColor = (value, key) => {
  const CONFIG = getActiveConfig()
  if (!isString(value)) {
    if (CONFIG.verbose) console.warn(value, '- type for color is not valid')
    return
  }

  if (value.slice(0, 2) === '--') return `var(${value})`

  if (key && value[key]) value = value[key]
  const [name, alpha, tone] = isArray(value) ? value : value.split(' ')
  const { COLOR, GRADIENT } = CONFIG

  let val = (COLOR[name] || GRADIENT[name])

  if (!val) {
    if (CONFIG.verbose) console.warn('Can\'t find color ', name)
    return value
  }

  if (key) {
    if (val[key]) val = val[key]
    else if (CONFIG.verbose) console.warn(value, ' - does not have ', key)
  }

  // TODO: support variables
  // if (alpha) return `rgba(var(${val[shade || ''].var}), ${modifier})`

  let rgb = val.rgb
  if (rgb) {
    if (tone) {
      if (!val[tone]) {
        const toHex = rgbArrayToHex(rgb.split(', ').map(v => parseFloat(v)))
        if (tone.slice(0, 1) === '-' || tone.slice(0, 1) === '+') {
          rgb = hexToRgbArray(getColorShade(toHex, parseFloat(tone))).join(', ')
        } else {
          const [r, g, b] = [...rgb.split(', ').map(v => parseInt(v))]
          const hsl = rgbToHSL(r, g, b)
          const [h, s, l] = hsl // eslint-disable-line
          const newRgb = hslToRgb(h, s, parseFloat(tone) / 100 * 255)
          rgb = newRgb
        }
        val[tone] = { rgb, var: `${val.var}-${tone}` }
      } else rgb = val[tone].rgb
    }
    if (alpha) return `rgba(${rgb}, ${alpha})`
    return CONFIG.useVariable ? `var(${val.var})` : `rgb(${rgb})`
  } else return CONFIG.useVariable ? `var(${val.var})` : val.value
}

export const getMediaColor = (value, property, globalTheme) => {
  const CONFIG = getActiveConfig()
  if (!globalTheme) globalTheme = CONFIG.globalTheme
  if (!isString(value)) {
    if (CONFIG.verbose) console.warn(value, '- type for color is not valid')
    return
  }

  if (value.slice(0, 2) === '--') return { [property]: `var(${value})` }

  const [name] = isArray(value) ? value : value.split(' ')

  const { COLOR, GRADIENT } = CONFIG
  const val = COLOR[name] || GRADIENT[name]
  const isObj = isObject(val)

  if (isObj && val.value) return { [property]: getColor(value, globalTheme) }
  else if (isObj) {
    if (globalTheme) return { [property]: getColor(value, `@${globalTheme}`) }
    else {
      const obj = {}
      for (const mediaName in val) {
        const query = CONFIG.MEDIA[mediaName.slice(1)]
        const media = `@media screen and ${query}`
        obj[media] = { [property]: getColor(value, mediaName) }
      }
      return obj
    }
  } else {
    if (CONFIG.verbose) console.warn('Can\'t find color', value)
    return { [property]: value }
  }
}

export const setColor = (val, key, suffix) => {
  const CONFIG = getActiveConfig()

  if (isString(val) && val.slice(0, 2) === '--') val = getColor(val.slice(2))

  if (isArray(val)) {
    return {
      '@light': setColor(val[0], key, 'light'),
      '@dark': setColor(val[1], key, 'dark')
    }
  }

  if (isObject(val)) {
    const obj = {}
    for (const variant in val) obj[variant] = setColor(val[variant], key, variant.slice(0, 1) === '@' ? variant.slice(1) : variant)
    return obj
  }

  const CSSVar = `--color-${key}` + (suffix ? `-${suffix}` : '')
  const [r, g, b, a = 1] = colorStringToRgbaArray(val.value || val)
  const alpha = parseFloat(a.toFixed(2))
  const rgb = `${r}, ${g}, ${b}`
  const value = `rgba(${rgb}, ${alpha})`

  if (CONFIG.useVariable) { CONFIG.CSS_VARS[CSSVar] = value }

  return {
    var: CSSVar,
    rgb,
    alpha,
    value
  }
}

export const setGradient = (val, key, suffix) => {
  const CONFIG = getActiveConfig()
  if (isString(val) && val.slice(0, 2) === '--') val = getColor(val.slice(2))

  if (isArray(val)) {
    return {
      '@light': setGradient(val[0], key, 'light'),
      '@dark': setGradient(val[0], key, 'dark')
    }
  }

  if (isObject(val)) {
    const obj = {}
    for (const variant in val) obj[variant] = setGradient(val[variant], key, variant.slice(0, 1) === '@' ? variant.slice(1) : variant)
    return obj
  }

  const CSSVar = `--gradient-${key}` + (suffix ? `-${suffix}` : '')

  if (CONFIG.useVariable) {
    CONFIG.CSS_VARS[CSSVar] = val.value || val
  }

  return {
    var: CSSVar,
    value: val.value || val
  }
}
