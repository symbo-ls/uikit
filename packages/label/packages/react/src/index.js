'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Label as component } from '@symbo.ls/label'

export const Label = (props, state) => {
  return reactTransformer(component, props, state)
}
