'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Position as component } from '@symbo.ls/position'

export const Position = (props, state) => {
  return DOMQLReact(component, props, state)
}
