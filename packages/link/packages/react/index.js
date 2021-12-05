'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Link as component } from '@symbo.ls/link'

export const Link = (props, state) => {
  return reactTransformer(component, props, state)
}
