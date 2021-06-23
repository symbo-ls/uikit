'use strict'

import { Theme } from '@rackai/scratch'
import style, { tagShape, toolTipShape, shape, depth } from './style'

const Shape = {
  style,

  define: {
    shape: param => param || '',
    fontSize: param => param || '',
    ratio: param => param,
    depth: param => param !== undefined ? param : 10,
    round: param => param !== undefined ? param : 6,
    theme: param => {
      const themes = Object.keys(Theme)
      return (themes.indexOf(param) >= 0) ? param : themes.transparent
    }
  },

  class: {
    shape: element => shape[element.shape],
    fontSize: element => ({ fontSize: element.fontSize }),
    depth: element => depth[element.depth],
    round: element => ({ borderRadius: element.round }),
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
