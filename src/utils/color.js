'use strict'

const ENV = process.env.NODE_ENV

export const colorStringToRgbaArray = color => {
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
    const elem = document.body.appendChild(document.createElement('fictum'))
    // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
    const flag = 'rgb(1, 2, 3)'
    elem.style.color = flag
    // color set failed - some monstrous css rule is probably taking over the color of our object
    if (elem.style.color !== flag) return
    elem.style.color = color
    if (elem.style.color === flag || elem.style.color === '') return // color parse failed
    color = window.getComputedStyle(elem).color
    document.body.removeChild(elem)
  }

  // convert 'rgb(R,G,B)' to 'rgb(R,G,B,A)' which looks awful but will pass the regxep below
  if (color.indexOf('rgb') === 0) {
    if (color.indexOf('rgba') === -1) color = `${color}, 1`
    return color.match(/[\.\d]+/g).map(a => +a) // eslint-disable-line
  }
}

export const mixTwoColors = (colorA, colorB, range = 0.5) => {
  colorA = colorStringToRgbaArray(colorA)
  colorB = colorStringToRgbaArray(colorB)
  return mixTwoRgba(colorA, colorB, range)
}

export const hexToRgb = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgb(${r},${g},${b})`
}

export const hexToRgbArray = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return [r, g, b]
}

export const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export const rgbArrayToHex = ([r, g, b]) => {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const mixTwoRgb = (colorA, colorB, range = 0.5) => {
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

export const changeLightness = (delta, hsl) => {
  const [hue, saturation, lightness] = hsl

  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  )

  return [hue, saturation, newLightness]
}

export const rgbToHSL = (r, g, b) => {
  const a = Math.max(r, g, b); const n = a - Math.min(r, g, b); const f = (1 - Math.abs(a + a - n - 1))
  const h = n && ((a == r) ? (g - b) / n : ((a == g) ? 2 + (b - r) / n : 4 + (r - g) / n)) //eslint-disable-line
  return [60 * (h < 0 ? h + 6 : h), f ? n / f : 0, (a + a - n) / 2]
}

export const hslToRgb = (h, s, l,
  a = s * Math.min(l, 1 - l),
  f = (n, k = (n + h / 30) % 12) => l - a * Math.max(
    Math.min(k - 3, 9 - k, 1), -1
  )
) => [f(0), f(8), f(4)]

export const getColorShade = (col, amt) => {
  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00FF) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000FF) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (g | (b << 8) | (r << 16)).toString(16)
}

export const mixTwoRgba = (colorA, colorB, range = 0.5) => {
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
  const arr = colorStringToRgbaArray(color)
  if (!arr) {
    if (ENV === 'test' || ENV === 'development') console.warn(color + 'color is not rgba')
    return
  }
  arr[3] = opacity
  return `rgba(${arr})`
}
