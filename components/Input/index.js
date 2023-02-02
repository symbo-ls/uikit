'use strict'

import { Focusable } from '@symbo.ls/atoms'

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
    fontFamily: 'smbls',
    padding: 'Z A'
  },

  attr: {
    pattern: ({ props }) => props.pattern,
    minlength: ({ props }) => props.minlength,
    maxlength: ({ props }) => props.maxlength,
    name: ({ props }) => props.name,
    placeholder: ({ props }) => props.placeholder,
    value: ({ props, state }) => props.value,
    disabled: ({ props }) => props.disabled || null,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  }
}
