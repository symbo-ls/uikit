'use strict'

import { reactTransformer } from '@domql/react-transformer'
import { DatePicker as component } from '@symbo.ls/datepicker'

export const DatePicker = (props, state) => {
  return reactTransformer(component, props, state)
}
