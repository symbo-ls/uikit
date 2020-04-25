'use strict'

import { theme } from 'scratch'
import { css } from 'emotion'

import { style, shape, depth, round, size } from './style'

var Shape = {
  style,

  class: {
    shape: element => css(shape[element.shape]),
    depth: element => css(depth[element.depth]),
    round: element => css(round[element.round]),
    size: element => css(size[element.size]),
    theme: element => css(theme[element.theme])
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
