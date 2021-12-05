'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Field as component } from '@symbo.ls/field'

export const Field = (props, state) => {
  return reactTransformer(component, props, state)
}
