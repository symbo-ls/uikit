'use strict'

import style from './style'

import { Icon, Text, Direction, Block } from '../'
import { } from '../Flex'

export const IconText = {
  style,

  props: {
    flexAlign: 'center flex-start'
  },

  icon: { proto: Icon, if: ({ parent }) => parent.props.icon, props: ({ parent }) => ({ icon: parent.props.icon }) },

  text: ({ props }) => props.text
}
