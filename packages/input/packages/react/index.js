'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Input as component } from '@symbo.ls/input'

export const Input = (props, state) => {
  return reactTransformer(component, props, state)
}
