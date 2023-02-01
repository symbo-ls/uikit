'use strict'

export const Label = {
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
