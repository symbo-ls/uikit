'use strict'

import { THEME, mapSpacing, COLOR, isObjectLike } from '@rackai/scratch'
import { isObject } from '@rackai/domql/src/utils'

import style, { shape, depth } from './style'

export const Shape = {
  class: {
    default: style,
    shape: ({ props }) => shape[props.shape],
    shapeDirection: ({ props }) => props.shape ? shape[props.shape][props.shapeDirection || 'top'] : null,
    shapeDirectionColor: ({ props, ...el }) => {
      return props.shape ? { '&:before': { borderColor: el.class.backgroundColor } } : null
    },
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => {
      return mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })
    },
    theme: ({ props }) => {
      const { theme } = props
      if (isObjectLike(theme) && theme[1]) return THEME[theme[0]][theme[1]]
      if (isObject(theme)) return theme
      else return THEME[theme]
    },
    color: ({ props }) => COLOR[props.color] ? { color: COLOR[props.color].value } : null,
    background: ({ props }) => COLOR[props.background] ? { color: COLOR[props.background].value } : null
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

  // padding: {
  //   default: ratio.phi,
  //   mobile: ratio.perfect
  // }
}

export default Shape
