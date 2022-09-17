'use strict'

import { IconText, Flex } from '.'

export const Notification = {
  extend: Flex,

  props: {
    padding: 'Z1 B Z1 A1',
    round: 'A',
    gap: 'X2',
    style: { cursor: 'pointer' },

    icon: {
      icon: {
        name: 'info outline'
      }
    },

    article: {
      flow: 'column',
      align: 'flex-start',
      gap: 'X2',
      title: {
        fontWeight: '600',
        lineHeight: '1em',
        text: 'Notification'
      },
      p: {
        fontSize: 'Z',
        margin: '0',
        text: 'is not always a distraction'
      }
    }
  },

  icon: {
    extend: [IconText]
  },

  article: {
    extend: Flex,
    title: {},
    p: {}
  }
}
