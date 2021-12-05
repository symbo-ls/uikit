'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Shape as component } from '@symbo.ls/shape'

export const Shape = (props, state) => {
  return reactTransformer(component, props, state)
}
