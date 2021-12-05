'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Link as component } from '@symbo.ls/link'

export const Link = (props, state) => {
  return reactTransformer(component, props, state)
}
