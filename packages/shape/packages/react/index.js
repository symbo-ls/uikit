'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Shape as component } from '@symbo.ls/shape'

export const Shape = (props, state) => {
  return reactTransformer(component, props, state)
}
