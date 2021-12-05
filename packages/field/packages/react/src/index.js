'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Field as component } from '@symbo.ls/field'

export const Field = (props, state) => {
  return reactTransformer(component, props, state)
}
