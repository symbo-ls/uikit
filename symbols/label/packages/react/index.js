'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Label as component } from '@symbo.ls/label'

export const Label = (props, state) => {
  return DOMQLReact(component, props, state)
}
