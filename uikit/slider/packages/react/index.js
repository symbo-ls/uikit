'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Slider as component } from '@symbo.ls/slider'

export const Slider = (props, state) => {
  return DOMQLReact(component, props, state)
}
