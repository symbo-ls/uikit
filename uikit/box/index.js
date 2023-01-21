'use strict'

import { Shape } from '@symbo.ls/shape'
import { Position } from '@symbo.ls/position'
import { Theme } from '@symbo.ls/theme'
import { Block } from '@symbo.ls/block'
import { Text } from '@symbo.ls/text'
import { Overflow } from '@symbo.ls/overflow'

const PropsCSS = {
  class: {
    style: ({ props }) => props && props.style
  }
}

export const Box = {
  extend: [
    Shape,
    Position,
    Theme,
    Block,
    Text,
    Overflow
  ],
  attr: {
    id: ({ props }) => props.id
  }
}

