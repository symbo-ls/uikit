'use strict'

import { Input } from '@symbo.ls/atoms'

const props = {
  height: 'E',
  lineHeight: 1.4,
  style: { resize: 'none' }
}

export const TextArea = {
  extend: [Input],
  props,
  tag: 'textarea'
}
