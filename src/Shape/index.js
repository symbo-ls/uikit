'use strict'

import { Theme } from '@rackai/scratch'
import style, { tagShape, toolTipShape, shape, depth, round, roundCornerTopLeft, roundCornerBottomLeft, roundCornerTopRight, roundCornerBottomRight } from './style'

const Shape = {
  style,

  define: {
    shape: param => param || '',
    toolTipShape: param => param || '',
    tagShape: param => param || '',
    depth: param => param !== undefined ? param : 10,
    round: param => param !== undefined ? param : 6,
    roundCornerTopLeft: param => param !== undefined ? param : 6,
    roundCornerBottomLeft: param => param !== undefined ? param : 6,
    roundCornerTopRight: param => param !== undefined ? param : 6,
    roundCornerBottomRight: param => param !== undefined ? param : 6,
    theme: param => {
      const themes = Object.keys(Theme)
      return (themes.indexOf(param) >= 0) ? param : themes.transparent
    }
  },

  class: {
    toolTipShape: element => toolTipShape[element.toolTipShape],
    tagShape: element => tagShape[element.tagShape],
    shape: element => shape[element.shape],
    depth: element => depth[element.depth],
    round: element => round[element.round],
    roundCornerTopLeft: element => roundCornerTopLeft[element.roundCornerTopLeft],
    roundCornerBottomLeft: element => roundCornerBottomLeft[element.roundCornerBottomLeft],
    roundCornerTopRight: element => roundCornerTopRight[element.roundCornerTopRight],
    roundCornerBottomRight: element => roundCornerBottomRight[element.roundCornerBottomRight],
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
