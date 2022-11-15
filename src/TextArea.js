'use strict'

import { Input, Focusable } from '.'

const props = {
  height: 'E',
  lineHeight: 1.4,
  style: { resize: 'none' }
}

export const TextArea = {
  extend: [Input, Focusable],
  props,
  tag: 'textarea'
}
