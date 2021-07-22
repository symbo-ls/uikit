'use strict'

import { THEME, mapSpacing, COLOR } from '@rackai/scratch'
import { isObject } from '../../../domql/src/utils'

import style, { shape, depth } from './style'

export const Shape = {
  style,

  class: {
    color: ({ props }) => COLOR[props.color] ? { color: COLOR[props.color].value } : null,
    background: ({ props }) => COLOR[props.background] ? { color: COLOR[props.background].value } : null,
    shape: ({ props }) => shape[props.shape],
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => {
      return mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })
    },
    theme: ({ props }) => {
      const { theme } = props
      if (isObject(theme) && theme[0]) return THEME[theme[0]][theme[1]]
      if (isObject(theme)) return theme
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
