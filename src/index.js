'use strict'

import {
  Sequence,
  Color,
  Theme,
  Box,
  Size,
  Typography,
  Unit,

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
  getFontFace
} from '@rackai/scratch'

import Shape from './Shape'
import SVG from './SVG'
import Icon from './Icon'
import Img from './Img'
import IconText from './IconText'
import Button from './Button'
import Field from './Field'

export {
  // scratch library
  Sequence,
  Color,
  Theme,
  Box,
  Size,
  Typography,
  Unit,

  // symbols
  Shape,
  SVG,
  Img,
  Icon,
  IconText,
  Button,
  Field,

  // scratch utils
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
  getFontFace
}
