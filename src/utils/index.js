'use strict'

import { Unit } from '../config'

export const isArray = arg => Array.isArray(arg)

export const isObjectLike = arg => {
  if (arg === null) return false
  return (typeof arg === 'object')
}

export const merge = (obj, original) => {
  for (const e in original) {
    const objProp = obj[e]
    const originalProp = original[e]
    if (objProp === undefined) {
      obj[e] = originalProp
    }
  }
  return obj
}

export const colorStringToRGBAArray = color => {
  if (color === '') return
  if (color.toLowerCase() === 'transparent') return [0, 0, 0, 0]

  // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
  if (color[0] === '#') {
    if (color.length < 7) {
      color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '')
    } return [parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16),
      color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1]
  }

  // convert named colors
  if (color.indexOf('rgb') === -1) {
    // intentionally use unknown tag to lower chances of css rule override with !important
    var elem = document.body.appendChild(document.createElement('fictum'))
    // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
    var flag = 'rgb(1, 2, 3)'
    elem.style.color = flag
    // color set failed - some monstrous css rule is probably taking over the color of our object
    if (elem.style.color !== flag) return
    elem.style.color = color
    if (elem.style.color === flag || elem.style.color === '') return // color parse failed
    color = window.getComputedStyle(elem).color
    document.body.removeChild(elem)
  }

  // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
  if (color.indexOf('rgb') === 0) {
    if (color.indexOf('rgba') === -1) color = `${color}, 1`
    return color.match(/[\.\d]+/g).map(a => +a) // eslint-disable-line
  }
}

export const mixTwoColors = (colorA, colorB, range = 0.5) => {
  colorA = colorStringToRGBAArray(colorA)
  colorB = colorStringToRGBAArray(colorB)
  return mixTwoRGBA(colorA, colorB, range)
}

export const hexToRGB = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgb(${r},${g},${b})`
}

export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const mixTwoRGB = (colorA, colorB, range = 0.5) => {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr[i] = Math.round(
      colorA[i] + (
        (colorB[i] - colorA[i]) * range
      )
    )
  }
  return `rgb(${arr})`
}

export const mixTwoRGBA = (colorA, colorB, range = 0.5) => {
  const arr = []
  for (let i = 0; i < 4; i++) {
    const round = (i === 3) ? x => x : Math.round
    arr[i] = round(
      (colorA[i] + (
        (colorB[i] - colorA[i]) * range
      ))
    )
  }
  return `rgba(${arr})`
}

export const opacify = (color, opacity) => {
  const arr = colorStringToRGBAArray(color)
  arr[3] = opacity
  return `rgba(${arr})`
}

export const getFontFormat = url => url.split(/[#?]/)[0].split('.').pop().trim()

export const setCustomFont = (name, weight, url) => `@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url('${url}') format('${url}');
}`
// src: url('${url}') format('${getFontFormat(url)}');

export const getFontFace = Library => {
  var fonts = ''
  for (var name in Library) {
    var font = Library[name]
    for (var weight in font) {
      var { url } = font[weight]
      fonts += `\n${setCustomFont(name, weight, url)}`
    }
  }
  return fonts
}

const numToLetterMap = {
  '-6': 'U',
  '-5': 'V',
  '-4': 'W',
  '-3': 'X',
  '-2': 'Y',
  '-1': 'Z',
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
  8: 'I',
  9: 'J'
}

const setSequenceValue = ({ variable, value, scaling, state }) => {
  state.sequence[variable] = {
    decimal: Math.round(value * 100) / 100,
    val: Math.round(value),
    scaling
  }
  state.scales[variable] = scaling
}

export const generateSubSequence = ({ base, value, ratio, variable, state }) => {
  const next = value * ratio
  const smallscale = (next - value) / ratio

  const valueRounded = Math.round(value)
  const nextRounded = Math.round(next)
  const diffRounded = nextRounded - valueRounded

  let arr = []
  const first = next - smallscale
  const second = value + smallscale
  const middle = (first + second) / 2
  if (diffRounded > 100) arr = [first, middle, second]
  else if (diffRounded > 2) arr = [first, second]
  else if (diffRounded > 1) arr = [middle]

  arr.map((v, k) => {
    const scaling = Math.round(v / base * 1000) / 1000
    const newVar = variable + (k + 1)

    setSequenceValue({ variable: newVar, value: v, scaling, state })
  })
}

export const generateSequence = ({ type, base, ratio, range, subSequence, ...state }) => {
  const n = Math.abs(range[0]) + Math.abs(range[1])
  const prefix = '--' + type + '-'
  for (let i = 0; i <= n; i++) {
    const key = range[1] - i
    const letterKey = numToLetterMap[key]
    const value = base * Math.pow(ratio, key)
    const scaling = Math.round(value / base * 1000) / 1000
    const variable = prefix + letterKey

    setSequenceValue({ variable, value, scaling, state })

    if (subSequence) generateSubSequence({ base, value, ratio, variable, state })
  }
  return state
}

export const fallBack = ({ type, prop, val = 'A', prefix = '--font-size-' }) => {
  if (typeof val !== 'string') console.warn(prop, val, 'is not a string')
  const value = type ? type[prefix + val.toUpperCase()] : null
  if (!value) return console.warn('can\'t find', type, prefix + val.toUpperCase(), val.toUpperCase())
  return ({
    [prop]: value.val + Unit.default,
    [prop]: value.scaling + 'em'
  })
}
