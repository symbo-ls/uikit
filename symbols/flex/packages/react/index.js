'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Flex as component } from '@symbo.ls/flex'

export const Flex = (props, state) => {
  return DOMQLReact(component, props, state)
}
