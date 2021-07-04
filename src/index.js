'use strict'

import './styles.js'

import {
  Sequence,
  Color,
  Theme,
  Spacing,
  Typography,
  Unit,
  Font,
  Document,
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
} from '@rackai/scratch'

import utilityStyles from './styles'

import Text from './Text'
import Block from './Block'
import Shape from './Shape'
import Direction from './Direction'

import SVG from './SVG'
import Icon from './Icon'
import Img from './Img'
import Link from './Link'
import IconText from './IconText'
import Input from './Input'
import Field from './Field'
import Button, { SquareButton, RectangleButton, CircleButton, KangorooButton } from './Button'
import ToolBar from './ToolBar'
import User, { UserBundle } from './User'
import { parentMode } from './Banner'
import { grid, grid2 } from './GridLayouts'
// import { ListItem, List } from './Dropdown'
import Slider from './Slider'
import Notification from './Notification'
import Dropdown from './Dropdown'
import DatePicker from './DatePicker'
import Tooltip from './Tooltip'
import Label from './Label'
import Pills from './Pills'
import Select from './Select'

export {
  utilityStyles,

  // scratch library
  Sequence,
  Color,
  Theme,
  Spacing,
  Typography,
  Document,
  Unit,
  Font,
  Reset,

  // symbols
  Text,
  Block,
  Shape,
  Direction,

  SVG,
  Img,
  Link,
  Icon,
  IconText,
  Button,
  SquareButton,
  RectangleButton,
  CircleButton,
  KangorooButton,
  Input,
  Field,
  parentMode,
  User,
  UserBundle,
  ToolBar,

  // tools
  Slider,

  Notification,
  Select,
  // List,
  // ListItem,
  Dropdown,
  DatePicker,
  Tooltip,
  Label,
  Pills,

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
  getFontFace,
  mapPadding,
  mapFontSize
}
