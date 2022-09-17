'use strict'

import { Button, Flex } from './'

export const Tooltip = {
  extend: [Button, Flex],
  props: {
    background: 'black',
    color: 'white',
    flow: 'column',
    shape: 'tooltip',
    shapeDirection: 'top',
    padding: 'Z2',
    round: 'X2',
    minWidth: 'D2',
    gap: 'X1',

    title: {
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

  title: {},
  p: {}
}
