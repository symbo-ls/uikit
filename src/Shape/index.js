'use strict'

import { Theme } from '@rackai/scratch'
import style, { shape, depth, round, size } from './style'

var Shape = {
  style,

  class: {
    shape: element => shape[element.shape],
    depth: element => depth[element.depth],
    round: element => round[element.round],
    size: element => size[element.size],
    theme: element => Theme[element.theme]
  },

  define: {
    shape: param => param || 'rectangle',
    depth: param => param !== undefined ? param : 10,
    round: param => param !== undefined ? param : 6,
    size: param => param || 'default',
    theme: param => {
      var themes = Object.keys(Theme)
      return (themes.indexOf(param) >= 0) ? param : themes[0]
    }
  }

  // mode: {
  //   dark: {
  //     theme: 'white'
  //   }
  // }

  // theme: {
  //   default: 'primary',
  //   dark: 'whiteish'
  // }

  // size: {
  //   default: 'auto',
  //   mobile: 'fit'
  // }

  // spacing: {
  //   default: ratio.phi,
  //   mobile: ratio.perfect
  // }
}

export default Shape
