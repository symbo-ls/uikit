'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Sidebar as component } from '@symbo.ls/sidebar'

export const Sidebar = (props, state) => {
  return reactTransformer(component, props, state)
}
