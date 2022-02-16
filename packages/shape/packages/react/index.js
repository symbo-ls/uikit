'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Shape as component } from '@symbo.ls/shape'

export const Shape = (props, state) => {
  return DOMQLReact(component, props, state)
}
