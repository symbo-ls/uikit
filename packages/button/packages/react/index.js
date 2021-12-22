'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Button as ButtonCopy, SquareButton as SquareButtonCopy } from '@symbo.ls/button'

export const Button = (props, state) => {
  return DOMQLReact(ButtonCopy, props, state)
}

export const SquareButton = (props, state) => {
  return DOMQLReact(SquareButtonCopy, props, state)
}
