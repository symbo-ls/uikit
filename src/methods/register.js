'use strict'

import { color, theme, type } from '../config'
import mapTheme from './mapTheme'

var register = (kind, ...props) => {
  if (kind === 'color') {
    var colors = props[0]
    for (let c in colors) {
      color[c] = colors[c]
    }
  } else if (kind === 'theme') {
    props.map((value, key) => {
      var { name } = value
      if (!name) name = key
      theme[name] = mapTheme(value)
    })
  } else if (kind === 'typography') {
    props.map((value, key) => {
      console.log(value)
    })
  }
}

export default register
