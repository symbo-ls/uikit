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
      extend: Text,
      text: 'Notification'
    },
    p: {
      extend: Text,
      props: {
        fontSize: 'Z',
        text: 'is not always a distraction'
      },
      style: { margin: 0 }
    }
  }
}
