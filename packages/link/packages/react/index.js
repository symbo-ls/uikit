'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Link as component } from '@symbo.ls/link'

export const Link = (props, state) => {
  return DOMQLReact(component, props, state)
}
