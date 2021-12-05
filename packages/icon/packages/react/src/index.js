'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Icon as component } from '@symbo.ls/icon'

export const Icon = (props, state) => {
  return reactTransformer(component, props, state)
}
