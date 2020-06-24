'use strict'

import { Color, Theme, Typography } from '../config'
import mapTheme from './mapTheme'
import { getFontFace } from '../utils'

var set = (kind, ...props) => {
  if (kind === 'color') {
    var Colors = props[0]
    for (let c in Colors) {
      Color[c] = Colors[c]
    }
    return Colors
  } else if (kind === 'theme') {
    props.map(value => {
      var { name } = value
      Theme[name] = mapTheme(value)
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
