'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Block as component } from '@symbo.ls/block'

export const Block = (props, state) => {
  return reactTransformer(component, props, state)
}
