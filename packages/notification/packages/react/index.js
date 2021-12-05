'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { Notification as component } from '@symbo.ls/notification'

export const Notification = (props, state) => {
  return reactTransformer(component, props, state)
}
