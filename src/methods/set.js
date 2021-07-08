'use strict'

import { Color, Theme, Font } from '../config'

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
  } else if (kind === 'font') {
    props.map(value => {
      var { name, fontWeight, ...rest } = value
      if (Font[name]) {
        Font[name][fontWeight || 400] = rest
      } else {
        Font[name] = {
          [fontWeight || 400]: rest
        }
      }
    })
    return Font
  }
}

export default set
