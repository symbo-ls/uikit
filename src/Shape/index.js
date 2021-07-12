'use strict'

import { THEME } from '@rackai/scratch'

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
    round: ({ props }) => ({ borderRadius: props.round }),
    theme: ({ props }) => THEME[props.theme]
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
