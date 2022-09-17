'use strict'

import { Focusable } from './Interaction'

export const Input = {
  extend: [Focusable],
  tag: 'input',

  props: {
    type: 'input',
    fontSize: 'A',
    round: 'C',
    lineHeight: 1,
    padding: 'Z A'
  },

  attr: {
    placeholder: ({ props }) => props.placeholder,
    value: ({ props }) => props.value,
    disabled: ({ props }) => props.disabled || null,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },

  on: {
    input: ({ key, value, props }) => {

    }
  }
}
