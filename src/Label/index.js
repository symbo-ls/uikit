'use strict'
import Shape from '../Shape'

export default {
  proto: Shape,

  props: {
    emoji: '😂',
    text: '3',
    theme: 'White'
  },

  emoji: ({ props }) => props.emoji
}
