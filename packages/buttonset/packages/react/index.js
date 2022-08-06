'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { ButtonSet as component } from '@symbo.ls/buttonset'

export const ButtonSet = (props, state) => {
  return DOMQLReact(component, props, state)
}
