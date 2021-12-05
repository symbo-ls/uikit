'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { User as component } from '@symbo.ls/user'

export const User = (props, state) => {
  return reactTransformer(component, props, state)
}
