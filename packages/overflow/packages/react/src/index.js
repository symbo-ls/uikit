'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Overflow as component } from '@symbo.ls/overflow'

export const Overflow = (props, state) => {
  return reactTransformer(component, props, state)
}
