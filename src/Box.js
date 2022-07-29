'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive } from '.'

const PropsCSS = {
  class: {
    propsCSS: ({ props }) => props && props.css
  }
}

export const Box = {
  proto: [Shape, Position, Theme, Block, Text, Overflow, Transition, Transform, Responsive, PropsCSS]
}
