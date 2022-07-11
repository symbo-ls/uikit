'use strict'

import { Shape, Position, Block, Text, Overflow, Transition, Transform, Responsive } from '..'

export const Box = {
  proto: [Shape, Position, Block, Text, Overflow, Transition, Transform, Responsive],
  class: {
    fromProps: ({ props }) => props && props.css
  }
}
