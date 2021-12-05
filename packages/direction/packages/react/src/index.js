'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Direction as component } from '@symbo.ls/direction'

export const Direction = (props, state) => {
  return reactTransformer(component, props, state)
}