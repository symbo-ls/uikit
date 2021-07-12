'use strict'

import { COLOR, THEME, FONT } from '../config'

var set = (kind, ...props) => {
  if (kind === 'color') {
    props.map(value => {
      var { name, ...rest } = value
      COLOR[name] = rest
    })
    return COLOR
  } else if (kind === 'theme') {
    props.map(value => {
      var { name, ...rest } = value
      THEME[name] = rest
    })
    return THEME
  } else if (kind === 'font') {
    props.map(value => {
      var { name, fontWeight, ...rest } = value
      if (FONT[name]) {
        FONT[name][fontWeight || 400] = rest
      } else {
        FONT[name] = {
          [fontWeight || 400]: rest
        }
      }
    })
    return FONT
  }
}

export default set
