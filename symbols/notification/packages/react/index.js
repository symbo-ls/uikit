'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { Notification as component } from '@symbo.ls/notification'

export const Notification = (props, state) => {
  return DOMQLReact(component, props, state)
}
