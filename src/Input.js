'use strict'

import { Focusable } from './'

export const Input = {
  extend: [Focusable],
  tag: 'input',

  props: {
    border: 'none',
    type: 'input',
    theme: 'quaternary',
    fontSize: 'A',
    round: 'C',
    lineHeight: 1,
    padding: 'Z A'
  },

  attr: {
    name: ({ props }) => props.name,
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
