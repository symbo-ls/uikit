'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Input as component } from '@symbo.ls/input'

export const Input = (props, state) => {
  return reactTransformer(component, props, state)
}
