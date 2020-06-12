'use strict'

import { theme } from 'scratch'
import { style, shape, depth, round, size } from './style'

var Shape = {
  style,

  class: {
    shape: element => shape[element.shape],
    depth: element => depth[element.depth],
    round: element => round[element.round],
    size: element => size[element.size],
    theme: element => theme[element.theme]
  },

  define: {
    shape: param => param || 'rectangle',
    depth: param => param !== undefined ? param : 10,
    round: param => param !== undefined ? param : 6,
    size: param => param || 'default',
    theme: param => param || Object.keys(theme)[0] || ''
  }
}

export default Shape
