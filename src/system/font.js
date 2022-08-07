'use strict'

import { CONFIG, CSS_VARS } from '../factory' // eslint-disable-line

import {
  getDefaultOrFirstKey,
  getFontFaceEach
} from '../utils'

// const ENV = process.env.NODE_ENV

export const setFont = (val, key) => {
  const CSSvar = `--font-${key}`
  const fontFace = getFontFaceEach(key, val)
  return { var: CSSvar, value: val, fontFace }
}

export const getFontFamily = (LIBRARY, key) => {
  return getDefaultOrFirstKey(LIBRARY, key)
}

export const setFontFamily = (val, key) => {
  const { FONT_FAMILY, FONT_FAMILY_TYPES } = CONFIG
  const { value, type } = val
  if (val.isDefault) FONT_FAMILY.default = key

  const CSSvar = `--font-family-${key}`
  const str = `${value.join(', ')}, ${FONT_FAMILY_TYPES[type]}`
  return { var: CSSvar, value: str, arr: value, type }
}
