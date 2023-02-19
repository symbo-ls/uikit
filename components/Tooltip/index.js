'use strict'

import { Flex } from '@symbo.ls/atoms'

export const Tooltip = {
  extend: Flex,
  props: {
    background: 'black',
    color: 'white',
    flow: 'column',
    shape: 'tooltip',
    shapeDirection: 'top',
    padding: 'Z1 A',
    round: 'Y2',
    minWidth: 'D2',
    gap: 'X',
    textAlign: 'center',

    title: {
      fontWeight: 500,
      color: 'gray12',
      text: 'And tooltip is coming'
    },
    p: {
      fontSize: 'Z2',
      margin: '0',
      color: 'gray6',
      text: 'and winter too',
      fontWeight: '400'
    }
  },

  attr: { tooltip: true },

  title: {},
  p: {}
}
