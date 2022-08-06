'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Tooltip as component } from '@symbo.ls/tooltip'

export const Tooltip = (props, state) => {
  return DOMQLReact(component, props, state)
}
