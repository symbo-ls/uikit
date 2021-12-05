'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Text as component } from '@symbo.ls/text'

export const Text = (props, state) => {
  return reactTransformer(component, props, state)
}
