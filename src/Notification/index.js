'use strict'

import style from './style'

import { Shape, Block, Icon, Direction, Flex } from '../'

export const Notification = {
  style,
  proto: [Shape, Block, Direction, Flex],
  props: {
    icon: 'info',
    title: 'Notification',
    caption: 'is not always a distraction'
  },
  icon: { proto: Icon },
  article: {
    caption: ({ props }) => props.title,
    p: ({ props }) => props.caption
  }
}
