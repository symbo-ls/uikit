'use strict'

import { isObjectLike, THEME, mapSpacing } from '@rackai/scratch'

import style, { shape, depth } from './style'

export const Shape = {
  style,

  props: {
    shape: '',
    depth: '',
    theme: 'transparent',
    round: 0
  },

  class: {
    shape: ({ props }) => shape[props.shape],
    depth: ({ props }) => depth[props.depth],
    round: ({ props }) => mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round }),
    theme: ({ props }) => {
      const { theme } = props
      if (isObjectLike(theme)) return THEME[theme[0]][theme[1]]
      else return THEME[theme]
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
