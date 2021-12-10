'use strict'

import { Shape } from '@symbo.ls/shape'
import { Block } from '@symbo.ls/block'
import { IconText } from '@symbo.ls/icon-text'
import { Direction } from '@symbo.ls/direction'
import { Flex } from '@symbo.ls/flex'
import { Text } from '@symbo.ls/text'

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
