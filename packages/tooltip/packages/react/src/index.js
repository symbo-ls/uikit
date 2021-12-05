'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Tooltip as component } from '@symbo.ls/tooltip'

export const Tooltip = (props, state) => {
  return reactTransformer(component, props, state)
}
