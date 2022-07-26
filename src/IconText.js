'use strict'

import { Flex, Icon } from '.'

export const IconText = {
  proto: Flex,

  props: {
    align: 'center center',
    lineHeight: 1
  },

  icon: {
    proto: Icon,
    if: ({ parent }) => parent.props.icon,
    props: 'match'
  },

  text: ({ props }) => props.text
}
