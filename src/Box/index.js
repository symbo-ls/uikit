'use strict'

import { Shape, Position, Block, Text, Overflow, Transition, Responsive } from '..'

export const Box = {
  proto: [Shape, Position, Block, Text, Overflow, Transition, Responsive],
  class: {
    fromProps: ({ props }) => props && props.css
  }
}
