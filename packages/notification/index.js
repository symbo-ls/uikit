'use strict'

import { Shape, Block, IconText, Direction, Flex, Text } from '../'

export const Notification = {
  style: { cursor: 'pointer' },
  proto: [Shape, Block, Direction, Flex],
  icon: {
    proto: [IconText],
    props: {
      icon: 'info'
    },
    style: {
      width: 'fit-content',
      height: 'fit-content'
    }
  },
  article: {
    proto: [Flex],
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    caption: {
      proto: Text,
      text: 'Notification'
    },
    p: {
      proto: Text,
      props: {
        size: 'Z',
        text: 'is not always a distraction'
      },
      style: { margin: 0 }
    }
  }
}
