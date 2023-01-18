'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Overflow as component } from '@symbo.ls/overflow'

export const Overflow = (props, state) => {
  return DOMQLReact(component, props, state)
}
