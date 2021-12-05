'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { ButtonSet as component } from '@symbo.ls/buttonset'

export const ButtonSet = (props, state) => {
  return reactTransformer(component, props, state)
}
