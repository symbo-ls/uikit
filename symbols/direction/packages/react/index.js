'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Direction as component } from '@symbo.ls/direction'

export const Direction = (props, state) => {
  return DOMQLReact(component, props, state)
}
