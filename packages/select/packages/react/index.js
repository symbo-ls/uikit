'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Select as component } from '@symbo.ls/select'

export const Select = (props, state) => {
  return DOMQLReact(component, props, state)
}
