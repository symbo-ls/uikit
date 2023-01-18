'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Sidebar as component } from '@symbo.ls/sidebar'

export const Sidebar = (props, state) => {
  return DOMQLReact(component, props, state)
}
