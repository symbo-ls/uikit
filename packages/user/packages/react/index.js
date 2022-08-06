'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { User as component } from '@symbo.ls/user'

export const User = (props, state) => {
  return DOMQLReact(component, props, state)
}
