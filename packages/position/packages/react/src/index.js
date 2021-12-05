'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Position as component } from '@symbo.ls/position'

export const Position = (props, state) => {
  return reactTransformer(component, props, state)
}
