'use strict'

import { Flex } from '@symbo.ls/flex'

export const Pills = {
  extends: Flex,
  props: { gap: 'X2' },

  childExtends: {
    props: {
      round: 42,
      theme: 'secondary',
      width: 'X2',
      height: 'X2',
      opacity: '.3',

      $isActive: {
        opacity: '.5'
      }
    }
  }
}
