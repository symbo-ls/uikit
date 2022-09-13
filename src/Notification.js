'use strict'

import { IconText, Flex } from '.'

export const Notification = {
  extend: Flex,

  props: {
    padding: 'Z1 B Z1 A1',
    round: 'A',
    gap: 'X2',
    style: { cursor: 'pointer' },

    article: {
      gap: 'X2',
      title: {
        fontWeight: '600',
        lineHeight: '1em'
      },
      p: {
        fontSize: 'Z',
        margin: '0'
      }
    }
  },

  icon: {
    extend: [IconText],
    props: {
      icon: 'info outline'
    }
  },

  article: {
    extend: Flex,
    props: {
      flow: 'column',
      align: 'flex-start'
    },
    title: { text: 'Notification' },
    p: { text: 'is not always a distraction' }
  }
}
