'use strict'

import { Block } from '@symbo.ls/block'
import { Shape } from '@symbo.ls/shape'
import { Text } from '@symbo.ls/text'

export const Label = {
  extends: [Shape, Block, Text],

  style: { lineHeight: 1 },

  props: {
    emoji: '👍',
    text: '3',
    padding: 'X2 Z',
    round: 'C',
    depth: 16
  },

  emoji: ({ props }) => props.emoji
}
