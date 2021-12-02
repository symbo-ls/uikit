'use strict'

import style from './style'

import { Icon, Text, Direction, Block } from '../'
import { } from '../Flex'

export const IconText = {
  style,

  proto: [Text, Direction, Block],
  props: {
    flexAlign: 'center flex-start'
  },

  icon: { proto: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
