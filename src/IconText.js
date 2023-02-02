'use strict'

import { Flex, Icon } from '.'

export const IconText = {
  extend: Flex,

  props: {
    align: 'center center',
    lineHeight: 1
  },

  icon: {
    extend: Icon,
    if: ({ parent }) => parent.props.icon,
    props: 'match'
  },

  text: ({ props }) => props.text
}
