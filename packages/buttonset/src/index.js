'use strict'

import { SquareButton } from '@symbo-ls/button'
import { Shape } from '@symbo-ls/shape'
import { Flex } from '@symbo-ls/flex'
import { Block } from '@symbo-ls/block'

export const ButtonSet = {
  tag: 'nav',
  proto: [Shape, Flex, Block],
  childProto: {
    proto: [SquareButton]
  }
}
