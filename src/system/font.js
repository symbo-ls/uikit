'use strict'

import { isObject } from '@domql/utils'
import { CONFIG, CSS_VARS } from '../factory' // eslint-disable-line

import {
  getDefaultOrFirstKey,
  getFontFaceEach,
  setCustomFontMedia
} from '../utils'

// const ENV = process.env.NODE_ENV

export const setFont = (val, key) => {
  const CSSvar = `--font-${key}`
  const fontFace = isObject(val)
    ? setCustomFontMedia(key, val.url)
    : getFontFaceEach(key, val)
  return { var: CSSvar, value: val, fontFace }
}

export const getFontFamily = (key, factory) => {
  const { FONT_FAMILY } = CONFIG
  return getDefaultOrFirstKey(factory || FONT_FAMILY, key)
}

export const setFontFamily = (val, key) => {
  const { FONT_FAMILY, FONT_FAMILY_TYPES } = CONFIG
  const { value, type } = val
  if (val.isDefault) FONT_FAMILY.default = key

  const CSSvar = `--font-family-${key}`
  const str = `${value.join(', ')}, ${FONT_FAMILY_TYPES[type]}`
  return { var: CSSvar, value: str, arr: value, type }
}
