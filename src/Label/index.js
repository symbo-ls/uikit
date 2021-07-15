'use strict'
import { Block } from '../Block'
import { Shape } from '../Shape'
import { Text } from '../Text'

export const Label = {
  proto: [Shape, Block, Text],

  props: {
    emoji: '😂',
    text: '3',
    spacing: 'X1 Z2',
    round: 42,
    theme: 'White'
  },

  emoji: ({ props }) => props.emoji
}
