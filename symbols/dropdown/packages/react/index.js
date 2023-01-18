'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Dropdown as component } from '@symbo.ls/dropdown'

export const Dropdown = (props, state) => {
  return DOMQLReact(component, props, state)
}
