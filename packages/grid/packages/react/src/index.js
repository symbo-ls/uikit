'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Grid as component } from '@symbo.ls/grid'

export const Grid = (props, state) => {
  return reactTransformer(component, props, state)
}
