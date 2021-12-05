'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { Notification as component } from '@symbo.ls/notification'

export const Notification = (props, state) => {
  return reactTransformer(component, props, state)
}
