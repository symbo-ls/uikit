'use strict'

export const getDefaultOrFirstKey = (LIBRARY, key) => {
  if (LIBRARY[key]) return LIBRARY[key].value
  if (LIBRARY.default) return LIBRARY[LIBRARY.default].value
  return LIBRARY[Object.keys(LIBRARY)[0]].value
}

export const getFontFormat = url => url.split(/[#?]/)[0].split('.').pop().trim()

export const setCustomFont = (name, weight, url) => `@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: ${weight};
  src: url('${url}') format('${getFontFormat(url)}');
}`
// src: url('${url}') format('${getFontFormat(url)}');

export const getFontFaceEach = (name, weightsObject) => {
  const keys = Object.keys(weightsObject)
  const weightsJoint = keys.map(key => {
    const { fontWeight, url } = weightsObject[key]
    return setCustomFont(name, fontWeight, url)
  })
  return weightsJoint.join('\n')
}

export const getFontFace = LIBRARY => {
  const keys = Object.keys(LIBRARY)
  const fontsJoint = keys.map(key => getFontFaceEach(key, LIBRARY[key].value))
  return fontsJoint.join('\n')
}
