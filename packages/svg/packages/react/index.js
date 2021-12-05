'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Svg as component } from '@symbo.ls/svg'

export const Svg = (props, state) => {
  return reactTransformer(component, props, state)
}
