'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { IconText as component } from '@symbo.ls/icon-text'

export const IconText = (props, state) => {
  return DOMQLReact(component, props, state)
}
