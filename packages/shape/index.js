'use strict'

import { mapSpacing, getTheme, getColor } from '@symbo.ls/scratch'

import style, { shape, depth } from './style'

export const Shape = {
  class: {
    default: style,
    shape: ({ props }) => props.shape && shape[props.shape],
    shapeDirection: ({ props }) => props.shape && shape[props.shape][props.shapeDirection || 'top'],
    shapeDirectionColor: ({ props, ...el }) => props.shapeDirection && { '&:before': { borderColor: el.class.backgroundColor } },
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => props.round && (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })),
    theme: ({ props }) => props.theme && getTheme(props.theme),
    color: ({ props }) => props.color && ({ color: getColor(props.color) }),
    border: ({ props }) => props.border ? ({ border: getColor(props.border) }) : 'transparent 0',
    background: ({ props }) => props.background && ({ backgroundColor: getColor(props.background) })
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
