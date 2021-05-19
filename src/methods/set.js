'use strict'

import { Color, Theme, Typography } from '../config'
import { getFontFace } from '../utils'

var set = (kind, ...props) => {
  if (kind === 'color') {
    props.map(value => {
      var { name, ...rest } = value
      Color[name] = rest
    })
    return Color
  } else if (kind === 'theme') {
    props.map(value => {
      var { name, ...rest } = value
      Theme[name] = rest
    })
    return Theme
  } else if (kind === 'typography') {
    props.map(value => {
      var { name } = value
      delete value.name
      Typography[name] = value
    })
    return getFontFace(Typography)
  }
}

export default set
