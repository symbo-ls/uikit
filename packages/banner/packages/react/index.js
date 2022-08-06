'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Banner as component } from '@symbo.ls/banner'

export const Banner = (props, state) => {
  return DOMQLReact(component, props, state)
}
