'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Banner as component } from '@symbo.ls/banner'

export const Banner = (props, state) => {
  return reactTransformer(component, props, state)
}
