'use strict'

import { mapSpacing, getTheme, getColor } from '@symbo.ls/scratch'

import style, { shape, depth } from './style'

export const Shape = {
  class: {
    default: style,
    shape: ({ props }) => props.shape ? shape[props.shape] : null,
    shapeDirection: ({ props }) => props.shape ? shape[props.shape][props.shapeDirection || 'top'] : null,
    shapeDirectionColor: ({ props, ...el }) => props.shapeDirection ? { '&:before': { borderColor: el.class.backgroundColor } } : null,
    depth: ({ props }) => depth[props.depth],
    round: ({ props, key, ...el }) => props.round ? (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })) : null,
    theme: ({ props }) => props.theme ? getTheme(props.theme) : null,
    color: ({ props }) => props.color ? ({ color: getColor(props.color) }) : null,
    border: ({ props }) => props.border ? ({ borderColor: getColor(props.border) }) : null,
    background: ({ props }) => props.background ? ({ backgroundColor: getColor(props.background) }) : null
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
