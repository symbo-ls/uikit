'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Svg as component } from '@symbo.ls/svg'

export const Svg = (props, state) => {
  return DOMQLReact(component, props, state)
}
