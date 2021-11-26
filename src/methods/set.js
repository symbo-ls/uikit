'use strict'

import { COLOR, THEME, FONT, FONT_FAMILY, FONT_FAMILY_TYPES } from '../config'
import { isArray } from '../utils'

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
  } else if (kind === 'font-family') {
    props.map(value => {
      const { name, type } = value
      let { family } = value
      if (!family) family = Object.keys(FONT)
      if (isArray(family)) family = family.join(', ')
      FONT_FAMILY[name] = `${family}, ${FONT_FAMILY_TYPES[type || 'serif']}`
      if (!FONT_FAMILY.default) FONT_FAMILY.default = name
    })
    return FONT_FAMILY
  }
}

export default set
