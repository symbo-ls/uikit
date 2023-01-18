'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Box as component } from '@symbo.ls/box'

export const Box = (props, state) => {
  return DOMQLReact(component, props, state)
}
