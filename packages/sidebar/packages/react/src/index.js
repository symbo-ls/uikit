'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Sidebar as component } from '@symbo.ls/sidebar'

export const Sidebar = (props, state) => {
  return reactTransformer(component, props, state)
}
