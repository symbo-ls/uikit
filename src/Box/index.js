'use strict'

import { Shape, Position, Block, Text, Responsive } from '..'

export const Box = {
  proto: [Shape, Position, Block, Text, Responsive],
  class: {
    fromProps: ({ props }) => props && props.css
  }
}
