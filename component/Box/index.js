'use strict'

import {
  Shape,
  Position,
  Theme,
  Block,
  Text,
  Overflow,
  Timing,
  Transform,
  Media,
  Interaction,
  XYZ,
  Animation
} from '@symbo.ls/atoms'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  extend: [
    PropsCSS,
    Shape,
    Position,
    Theme,
    Block,
    Text,
    Overflow,
    Timing,
    Transform,
    Media,
    Interaction,
    XYZ,
    Animation
  ],
  attr: {
    id: ({ props }) => props.id
  }
}

