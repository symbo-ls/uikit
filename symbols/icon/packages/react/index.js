'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Icon as component } from '@symbo.ls/icon'

export const Icon = (props, state) => {
  return DOMQLReact(component, props, state)
}
