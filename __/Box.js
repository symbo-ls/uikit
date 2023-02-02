'use strict'

import { Shape, Position, Theme, Block, Text, Overflow, Timing, Transform, Media, Interaction, XYZ, Animation } from './atoms'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  extend: [Shape, Position, Theme, Block, Text, Overflow, Timing, Transform, Media, PropsCSS, Interaction, XYZ, Animation],
  attr: {
    id: ({ props }) => props.id
  }
}
