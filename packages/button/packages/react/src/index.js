'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Button as component } from '@symbo.ls/button'

export const Button = (props, state) => {
  return reactTransformer(component, props, state)
}
