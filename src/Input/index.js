'use strict'

import { Shape, Block, Text } from '..'

export const Input = {
  proto: [Shape, Block, Text],
  tag: 'input',

  props: (el, s) => ({
    type: 'input',
    value: s[el.key],
    // placeholder: '',
    round: 'C',
    padding: 'A B',
    theme: 'transparent'
  }),

  attr: {
    placeholder: ({ props }) => props.placeholder,
    value: ({ props }) => props.value,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },

  on: {
    input: ({ key, value, props }) => {

    }
  }
}
