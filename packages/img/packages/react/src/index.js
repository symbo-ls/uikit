'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Img as component } from '@symbo.ls/img'

export const Img = (props, state) => {
  return reactTransformer(component, props, state)
}
