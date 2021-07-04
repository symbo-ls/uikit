'use strict'

import { set } from './methods'

import {
  Sequence,
  Color,
  Theme,
  Spacing,
  Typography,
  Document,
  Unit,
  Font,
  Reset
} from './config'

import {
  colorStringToRGBAArray,
  opacify,
  mixTwoColors,
  hexToRGB,
  hexToRGBA,
  mixTwoRGB,
  mixTwoRGBA,

  getFontFormat,
  setCustomFont,
  getFontFace,
  mapPadding,
  mapFontSize
} from './utils'

export {
  Sequence,
  Color,
  Theme,
  Spacing,
  Typography,
  Document,
  Unit,
  Font,
  Reset,

  set,

  colorStringToRGBAArray,
  opacify,
  mixTwoColors,
  hexToRGB,
  hexToRGBA,
  mixTwoRGB,
  mixTwoRGBA,

  getFontFormat,
  setCustomFont,
  getFontFace,
  mapPadding,
  mapFontSize
}
