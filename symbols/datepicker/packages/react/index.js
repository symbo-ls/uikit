'use strict'

import { DOMQLReact } from '@symbo.ls/transform-react'
import { DatePicker as component } from '@symbo.ls/datepicker'

export const DatePicker = (props, state) => {
  return DOMQLReact(component, props, state)
}
