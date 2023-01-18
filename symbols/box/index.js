'use strict'

import { Shape } from '@symbo.ls/shape'
import { Position } from '@symbo.ls/position'
import { Theme } from '@symbo.ls/theme'
import { Block } from '@symbo.ls/block'
import { Text } from '@symbo.ls/text'
import { Overflow } from '@symbo.ls/overflow'
import { Timing } from '@symbo.ls/timing'
import { Transform } from '@symbo.ls/transform'
import { Media } from '@symbo.ls/media'
import { Interaction } from '@symbo.ls/interaction'
import { XYZ } from '@symbo.ls/xyz'
import { Animation } from '@symbo.ls/animation'

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
    Overflow,
    Timing,
    Transform,
    Media,
    PropsCSS,
    Interaction,
    XYZ,
    Animation
  ],
  attr: {
    id: ({ props }) => props.id
  }
}

