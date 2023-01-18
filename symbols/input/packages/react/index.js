'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Input as component } from '@symbo.ls/input'

export const Input = (props, state) => {
  return DOMQLReact(component, props, state)
}
