'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Timing, Transform, Responsive, Interaction, XYZ } from '.'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  extend: [Shape, Position, Theme, Block, Text, Overflow, Timing, Transform, Responsive, PropsCSS, Interaction, XYZ]
}
