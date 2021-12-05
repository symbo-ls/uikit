'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { IconText as component } from '@symbo.ls/icon-text'

export const IconText = (props, state) => {
  return reactTransformer(component, props, state)
}
