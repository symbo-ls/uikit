'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Pills as component } from '@symbo.ls/pills'

export const Pills = (props, state) => {
  return reactTransformer(component, props, state)
}
