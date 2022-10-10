'use strict'

import { isObject } from '@domql/utils'

export const getDefaultOrFirstKey = (LIBRARY, key) => {
  if (LIBRARY[key]) return LIBRARY[key].value
  if (LIBRARY.default) return LIBRARY[LIBRARY.default].value
  const hasValue = Object.keys(LIBRARY)[0]
  return hasValue && LIBRARY[hasValue] && LIBRARY[hasValue].value
}

export const getFontFormat = url => url.split(/[#?]/)[0].split('.').pop().trim()

export const setInCustomFontMedia = str => `@font-face { ${str} }`

export const setCustomFont = (name, url, weight) => `
  font-family: '${name}';
  font-style: normal;
  ${weight && `font-weight: ${weight};`}
  src: url('${url}') format('${getFontFormat(url)}');`

export const setCustomFontMedia = (name, url, weight) => `@font-face {
  ${setCustomFont(name, url, weight)}
}`
// src: url('${url}') format('${getFontFormat(url)}');

export const getFontFaceEach = (name, weights) => {
  const keys = Object.keys(weights)
  return keys.map(key => {
    const { url, fontWeight } = weights[key]
    return setCustomFont(name, url, fontWeight)
  })
}

export const getFontFace = LIBRARY => {
  const keys = Object.keys(LIBRARY)
  return keys.map(key => getFontFaceEach(key, LIBRARY[key].value))
}

export const getFontFaceEachString = (name, weights) => {
  const isObj = isObject(weights)
  if (isObj) return setCustomFontMedia(name, weights.url)
  return getFontFaceEach(name, weights).map(setInCustomFontMedia)
}

export const getFontFaceString = LIBRARY => {
  const keys = Object.keys(LIBRARY)
  return keys.map(key => getFontFaceEachString(key, LIBRARY[key].value))
}
