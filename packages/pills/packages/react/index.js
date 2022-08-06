'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Pills as component } from '@symbo.ls/pills'

export const Pills = (props, state) => {
  return DOMQLReact(component, props, state)
}
