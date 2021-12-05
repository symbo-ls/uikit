'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Dropdown as component } from '@symbo.ls/dropdown'

export const Dropdown = (props, state) => {
  return reactTransformer(component, props, state)
}
