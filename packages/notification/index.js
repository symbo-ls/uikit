'use strict'

import { IconText } from '@symbo.ls/icon-text'
import { Flex } from '@symbo.ls/flex'

export const Notification = {
  extends: Flex,
  props: {
    icon: {
      icon: 'info',
      width: 'fit-content',
      height: 'fit-content'
    },
    article: {
      flow: 'column',
      align: 'flex-start',
      p: {
        fontSize: 'Z',
        margin: '0'
      }
    },
    css: { cursor: 'pointer' }
  },
  icon: {
    extends: IconText
  },
  article: {
    extends: Flex,
    caption: { text: 'Notification' },
    p: { text: 'is not always a distraction' }
  }
}
