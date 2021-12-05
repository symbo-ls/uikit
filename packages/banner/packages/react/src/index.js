'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Banner as component } from '@symbo.ls/banner'

export const Banner = (props, state) => {
  return reactTransformer(component, props, state)
}
