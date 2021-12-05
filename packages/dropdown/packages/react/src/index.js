'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Dropdown as component } from '@symbo.ls/dropdown'

export const Dropdown = (props, state) => {
  return reactTransformer(component, props, state)
}
