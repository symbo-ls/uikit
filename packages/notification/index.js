'use strict'

import { Shape } from '@symbo.ls/shape'
import { Block } from '@symbo.ls/block'
import { IconText } from '@symbo.ls/icon-text'
import { Direction } from '@symbo.ls/direction'
import { Flex } from '@symbo.ls/flex'
import { Text } from '@symbo.ls/text'

export const Notification = {
  style: { cursor: 'pointer' },
  extends: Flex,
  icon: {
    extends: [IconText],
    props: {
      icon: 'info'
    },
    style: {
      width: 'fit-content',
      height: 'fit-content'
    }
  },
  article: {
    extends: [Flex],
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    caption: {
      extends: Text,
      text: 'Notification'
    },
    p: {
      extends: Text,
      props: {
        fontSize: 'Z',
        text: 'is not always a distraction'
      },
      style: { margin: 0 }
    }
  }
}
