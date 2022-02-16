'use strict'

import { Shape } from '@symbo.ls/shape'
import { Position } from '@symbo.ls/position'
import { Block } from '@symbo.ls/block'

export const Box = {
  extends: [Shape, Position, Block]
}
