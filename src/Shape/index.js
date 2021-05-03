'use strict'

import { Theme } from '@rackai/scratch'
import style, { shape, depth, round, roundCornerTopLeft } from './style'

const Shape = {
  style,

  define: {
    shape: param => param || 'rectangle',
    depth: param => param !== undefined ? param : 10,
    round: param => param !== undefined ? param : 6,
    roundCornerTopLeft: param => param !== undefined ? param : 6,
    theme: param => {
      const themes = Object.keys(Theme)
      return (themes.indexOf(param) >= 0) ? param : themes.transparent
    }
  },

  class: {
    shape: element => shape[element.shape],
    depth: element => depth[element.depth],
    round: element => round[element.round],
    roundCornerLeft: element => roundCornerTopLeft[element.roundCornerTopLeft],
    theme: element => Theme[element.theme]
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
