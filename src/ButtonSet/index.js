'use strict'

import { SquareButton } from '../Button'
import { Shape } from '../Shape'
import { Flex } from '../Flex'
import { Block } from '../Block'

export const ButtonSet = {
  tag: 'nav',
  proto: [Shape, Flex, Block],
  childProto: {
    proto: [SquareButton],
    props: { round: 12 }
  }
}
