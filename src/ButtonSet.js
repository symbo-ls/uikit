'use strict'

import { SquareButton } from './Button'
import { Flex } from './Flex'

export const ButtonSet = {
  tag: 'nav',
  extend: Flex,
  childExtend: SquareButton
}
