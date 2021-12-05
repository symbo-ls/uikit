'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Box as component } from '@symbo.ls/box'

export const Box = (props, state) => {
  return reactTransformer(component, props, state)
}
