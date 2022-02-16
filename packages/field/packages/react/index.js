'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Field as component } from '@symbo.ls/field'

export const Field = (props, state) => {
  return DOMQLReact(component, props, state)
}
