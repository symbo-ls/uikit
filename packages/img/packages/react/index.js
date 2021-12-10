'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Img as component } from '@symbo.ls/img'

export const Img = (props, state) => {
  return DOMQLReact(component, props, state)
}
