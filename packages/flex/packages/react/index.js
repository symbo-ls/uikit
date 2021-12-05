'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Flex as component } from '@symbo.ls/flex'

export const Flex = (props, state) => {
  return reactTransformer(component, props, state)
}
