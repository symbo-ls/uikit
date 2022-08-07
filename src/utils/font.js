'use strict'

export const getDefaultOrFirstKey = (LIBRARY, key) => {
  if (LIBRARY[key]) return LIBRARY[key].value
  if (LIBRARY.default) return LIBRARY[LIBRARY.default].value
  const hasValue = Object.keys(LIBRARY)[0]
  return hasValue && LIBRARY[hasValue] && LIBRARY[hasValue].value
}

export const getFontFormat = url => url.split(/[#?]/)[0].split('.').pop().trim()

export const setInCustomFontMedia = str => `@font-face { ${str} }`

export const setCustomFont = (name, weight, url) => `
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url('${url}') format('${getFontFormat(url)}');`

export const setCustomFontMedia = (name, weight, url) => `@font-face {
  ${setCustomFont((name, weight, url))}
}`
// src: url('${url}') format('${getFontFormat(url)}');

export const getFontFaceEach = (name, weightsObject) => {
  const keys = Object.keys(weightsObject)
  return keys.map(key => {
    const { fontWeight, url } = weightsObject[key]
    return setCustomFont(name, fontWeight, url)
  })
}

export const getFontFace = LIBRARY => {
  const keys = Object.keys(LIBRARY)
  return keys.map(key => getFontFaceEach(key, LIBRARY[key].value))
}

export const getFontFaceEachString = (name, weightsObject) => {
  return getFontFaceEach(name, weightsObject).map(setInCustomFontMedia)
}

export const getFontFaceString = LIBRARY => {
  const keys = Object.keys(LIBRARY)
  return keys.map(key => getFontFaceEachString(key, LIBRARY[key].value))
}
