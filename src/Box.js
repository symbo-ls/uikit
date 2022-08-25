'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, Interaction } from '.'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  extend: [Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, PropsCSS, Interaction]
}
