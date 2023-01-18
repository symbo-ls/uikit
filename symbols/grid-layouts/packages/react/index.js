'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { GridLayout as component } from '@symbo.ls/grid-layouts'

export const GridLayout = (props, state) => {
  return DOMQLReact(component, props, state)
}
