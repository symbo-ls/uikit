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
import Button, { buttonSquare, buttonRectangle, buttonCircle, buttonKangoroo } from './Button'
// import * as Banner from './Banner'
import { parentMode } from './Banner'
import User, { userBundle } from './User'
import { grid, grid2 } from './GridLayouts'
import { sideMenu } from './SideBar'
import ToolBar from './ToolBar'
import { rangeSliderTool, slideShow } from './Tool'
import Notification from './Notification'
import { dropDown } from './Dropdown'
import DarePicker from './DatePicker'
import Tooltip from './Tooltip'
import Label from './Label'

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
  buttonCircle,
  buttonKangoroo,
  Field,
  parentMode,
  User,
  userBundle,
  sideMenu,
  ToolBar,
  rangeSliderTool,
  Notification,
  // List,
  // ListItem,
  dropDown,
  DarePicker,
  slideShow,
  Tooltip,
  Label,

  // grid layouts
  grid,
  grid2,

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
