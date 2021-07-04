'use strict'

import { Theme, Spacing } from '@rackai/scratch'

import { Block, Text } from '..'
import style, { tagShape, toolTipShape, shape, depth } from './style'

const Shape = {
  proto: [ Text ],

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
    round: ({ props }) => ({ borderRadius: props.round }),
    theme: ({ props }) => Theme[props.theme]
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
