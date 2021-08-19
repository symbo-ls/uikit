'use strict'

import { Shape, Block, IconText, Direction, Flex, Text } from '../'

export const Notification = {
  // style,
  proto: [Shape, Block, Direction, Flex],
  icon: {
    proto: [IconText, Block, Shape, Text],
    props: {
      icon: 'info'
    },
    style: {
      border: '1px solid red',
      width: 'fit-content',
      height: 'fit-content'
    }
  },
  article: {
    proto: Shape,
    caption: {
      proto: Text,
      text: 'Notification'
    },
    p: {
      proto: Text,
      text: 'is not always a distraction'
    }
  }

  // article: {
  //   caption: ({ props }) => props.title,
  //   p: ({ props }) => props.caption
  // }
}
