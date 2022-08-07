'use strict'

import { CONFIG, CSS_VARS } from '../factory' // eslint-disable-line

import {
  isArray,
  colorStringToRgbaArray,
  isString,
  rgbToHSL,
  hexToRgbArray,
  rgbArrayToHex,
  hslToRgb,
  getColorShade
} from '../utils'

const ENV = process.env.NODE_ENV

export const getColor = value => {
  if (!isString(value)) {
    if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose) console.warn(value, '- type for color is not valid')
    return
  }

  const [name, alpha, tone] = isArray(value) ? value : value.split(' ')
  const { COLOR, GRADIENT } = CONFIG
  const val = COLOR[name] || GRADIENT[name]

  if (!val) {
    if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose) console.warn('Can\'t find color', name)
    return value
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
    return `rgb(${rgb})`
  } else return val.value
}

export const setColor = (val, key) => {
  if (val.slice(0, 2) === '--') val = getColor(val.slice(2))

  const CSSVar = `--color-${key}`
  const [r, g, b, a = 1] = colorStringToRgbaArray(val.value || val)
  const alpha = parseFloat(a.toFixed(2))
  const rgb = `${r}, ${g}, ${b}`
  const value = `rgba(${rgb}, ${alpha})`

  return {
    var: CSSVar,
    rgb,
    alpha,
    value
  }
}

export const setGradient = (val, key) => {
  const CSSVar = `--gradient-${key}`
  return {
    var: CSSVar,
    value: val.value || val
  }
}
