'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Slider as component } from '@symbo.ls/slider'

export const Slider = (props, state) => {
  return reactTransformer(component, props, state)
}
