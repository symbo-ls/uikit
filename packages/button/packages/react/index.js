'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Button as component } from '@symbo.ls/button'

export const Button = (props, state) => {
  return DOMQLReact(component, props, state)
}
