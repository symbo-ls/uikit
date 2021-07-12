'use strict'
import Shape from '../Shape'

export const Label = {
  proto: Shape,

  props: {
    emoji: '😂',
    text: '3',
    theme: 'White'
  },

  emoji: ({ props }) => props.emoji
}
