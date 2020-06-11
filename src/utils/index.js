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

export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const mixTwoRGB = (colors, range = 50) => {
  let arr = []
  for (let i = 0; i < 3; i++) {
    arr[i] = Math.round(
      colors[0][i] + (
        (colors[1][i] - colors[0][i]) * range / 100
      )
    )
  }
  return `rgb(${arr})`
}

export const mixTwoRGBA = (colors, range = 50) => {
  let arr = []
  for (let i = 0; i < 4; i++) {
    let round = (i === 3) ? (x) => x : Math.round
    arr[i] = round(
      (colors[0][i] + (
        (colors[1][i] - colors[0][i]) * range / 100
      ))
    )
  }
  return `rgba(${arr})`
}

export const setCustomFont = (name, weight, url) => `@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url(${weight}) format('woff2');
}`
