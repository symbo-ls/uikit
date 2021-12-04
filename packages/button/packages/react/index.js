'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Button as component } from '@symbo.ls/button'

export const Button = (props, state) => {
  return reactTransformer(component, props, state)
}
