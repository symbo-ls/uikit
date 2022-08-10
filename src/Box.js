'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, Interaction } from '.'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  proto: [Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, PropsCSS, Interaction]
}
