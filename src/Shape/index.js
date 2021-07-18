'use strict'

import { isObjectLike, THEME, mapSpacing } from '@rackai/scratch'

import style, { shape, depth } from './style'

export const Shape = {
  style,

  class: {
    shape: ({ props }) => shape[props.shape],
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => {
      return mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })
    },
    theme: ({ props }) => {
      const { theme } = props
      if (isObjectLike(theme)) return theme
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
