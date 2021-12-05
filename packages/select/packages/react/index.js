'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Select as component } from '@symbo.ls/select'

export const Select = (props, state) => {
  return reactTransformer(component, props, state)
}
