'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Text as component } from '@symbo.ls/text'

export const Text = (props, state) => {
  return DOMQLReact(component, props, state)
}
