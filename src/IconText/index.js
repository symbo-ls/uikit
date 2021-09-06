'use strict'

import style from './style'

import { Icon, Text, Direction, Flex } from '../'
import { } from '../Flex'

export const IconText = {
  style,

  proto: [Text, Direction, Flex],

  props: {},

  icon: { proto: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
