'use strict'

export const Input = {
  tag: 'input',

  props: {
    type: 'input',
    // value: s[el.key],
    // placeholder: '',
    fontSize: 'A',
    round: 'C',
    padding: 'Z B',
    theme: 'transparent'
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
