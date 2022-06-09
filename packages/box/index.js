'use strict'

import { Shape } from '@symbo.ls/shape'
import { Position } from '@symbo.ls/position'
import { Block } from '@symbo.ls/block'
import { Text } from '@symbo.ls/text'
import { Responsive } from '@symbo.ls/responsive'

export const Box = {
  proto: [Shape, Position, Block, Text, Responsive]
}
