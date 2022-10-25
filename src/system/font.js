'use strict'

import { isObject } from '@domql/utils'
import { getActiveConfig } from '../factory'

import {
  arrayze,
  getDefaultOrFirstKey,
  getFontFaceEach,
  setCustomFontMedia
} from '../utils'

// const ENV = process.env.NODE_ENV

export const setFont = (val, key) => {
  const CSSvar = `--font-${key}`
  const fontFace = val[0]
    ? getFontFaceEach(key, val)
    : setCustomFontMedia(key, val.url)
  return { var: CSSvar, value: val, fontFace }
}

export const getFontFamily = (key, factory) => {
  const CONFIG = getActiveConfig()
  const { FONT_FAMILY } = CONFIG
  return getDefaultOrFirstKey(factory || FONT_FAMILY, key)
}

export const setFontFamily = (val, key) => {
  const CONFIG = getActiveConfig()
  const { FONT_FAMILY, FONT_FAMILY_TYPES } = CONFIG
  let { value, type } = val
  if (val.isDefault) FONT_FAMILY.default = key

  if (isObject(value)) value = arrayze(value)

  const CSSvar = `--font-family-${key}`
  const str = `${value.join(', ')}, ${FONT_FAMILY_TYPES[type]}`
  return { var: CSSvar, value: str, arr: value, type }
}
