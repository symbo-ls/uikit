'use strict'

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
  let arr = []
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
  let arr = []
  for (let i = 0; i < 4; i++) {
    let round = (i === 3) ? x => x : Math.round
    arr[i] = round(
      (colorA[i] + (
        (colorB[i] - colorA[i]) * range
      ))
    )
  }
  return `rgba(${arr})`
}

export const opacify = (color, opacity) => {
  let arr = colorStringToRGBAArray(color)
  arr[3] = opacity
  return `rgba(${arr})`
}

export const getFontFormat = url => url.split(/[#?]/)[0].split('.').pop().trim()

export const setCustomFont = (name, weight, url) => `@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url('${url}') format('${getFontFormat(url)}');
}`

export const getFontFace = Library => {
  var fonts = ''
  for (var name in Library) {
    var font = Library[name]
    for (var weight in font) {
      var url = font[weight]
      fonts += `\n${setCustomFont(name, weight, url)}`
    }
  }
  return fonts
}
