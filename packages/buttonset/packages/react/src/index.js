'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { ButtonSet as component } from '@symbo.ls/buttonset'

export const ButtonSet = (props, state) => {
  return reactTransformer(component, props, state)
}
