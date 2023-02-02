'use strict'

import { Flex } from '@symbo.ls/atoms'

export const Pills = {
  extend: Flex,
  props: (el, s) => ({
    display: 'flex',
    gap: 'Y2',

    childProps: {
      background: 'gray6',
      width: 'Y2',
      height: 'Y2',
      round: 'A',

      '.active': {
        background: 'gray9'
      }
    }
  }),
  childExtend: {
    props: (el, s) => ({ active: parseInt(el.key) === s.active })
  }
}
