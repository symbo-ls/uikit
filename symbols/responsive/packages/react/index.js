'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Responsive as component } from '@symbo.ls/responsive'

export const Responsive = (props, state) => {
  return DOMQLReact(component, props, state)
}
