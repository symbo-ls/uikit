'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Block as component } from '@symbo.ls/block'

export const Block = (props, state) => {
  return DOMQLReact(component, props, state)
}
