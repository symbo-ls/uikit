'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Grid as component } from '@symbo.ls/grid'

export const Grid = (props, state) => {
  return DOMQLReact(component, props, state)
}
