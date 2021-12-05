'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Slider as component } from '@symbo.ls/slider'

export const Slider = (props, state) => {
  return reactTransformer(component, props, state)
}
