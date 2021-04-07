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
import Direction from './Direction'
import SVG from './SVG'
import Icon from './Icon'
import Img from './Img'
import Link from './Link'
import IconText from './IconText'
import Field from './Field'
import Button, { buttonSquare, buttonRectangle, buttonUser, buttonCircle, buttonPlus, buttonMore } from './Button'
// import * as Banner from './Banner'
import { parentMode } from './Banner'
import User, { userBundle } from './User'
import { grid } from './GridLayouts'

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
  Direction,
  SVG,
  Img,
  Link,
  Icon,
  IconText,
  Button,
  buttonSquare,
  buttonRectangle,
  buttonUser,
  buttonCircle,
  buttonPlus,
  buttonMore,
  Field,
  parentMode,
  User,
  userBundle,

  // grid layouts
  grid,

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
