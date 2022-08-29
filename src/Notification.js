'use strict'

import { Shape, Block, IconText, Direction, Flex, Text } from '.'

export const Notification = {
  style: { cursor: 'pointer' },
  extend: [Shape, Block, Direction, Flex],
  icon: {
    extend: [IconText],
    props: {
      icon: 'info'
    },
    style: {
      width: 'fit-content',
      height: 'fit-content'
    }
  },
  article: {
    extend: [Flex],
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    caption: {
      text: 'Notification'
    },
    p: {
      props: {
        fontSize: 'Z',
        text: 'is not always a distraction'
      },
      style: { margin: 0 }
    }
  }
}
