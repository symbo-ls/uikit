'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, Interaction } from '.'

const PropsCSS = {
  class: {
    propStyle: ({ props }) => props && props.style
  }
}

export const Box = {
  proto: [Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, PropsCSS, Interaction]
}
