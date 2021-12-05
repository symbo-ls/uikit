'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Text as component } from '@symbo.ls/text'

export const Text = (props, state) => {
  return reactTransformer(component, props, state)
}
