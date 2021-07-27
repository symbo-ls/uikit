'use strict'

import style from './style'

import { Icon, Text, Direction } from '../'

export const IconText = {
  style,

  proto: [Text, Direction],

  props: {},

  icon: { proto: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
