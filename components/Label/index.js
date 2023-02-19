'use strict'

import { Button } from '@symbo.ls/button'

export const Label = {
  extend: Button,

  props: {
    fontSize: 'Z2',
    emoji: '👍',
    text: '3',
    padding: 'X2 Z',
    round: 'C',
    lineHeight: 1,
    gap: 'X2',
    depth: 16,
    fontWeight: '500',
    background: 'blue .3',
    color: 'white'
  },

  emoji: {
    props: ({ parent }) => ({ text: parent.props.emoji })
  }
}
