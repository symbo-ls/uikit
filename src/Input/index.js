'use strict'

import { Shape, Block } from '..'
import style from './style'

export const Input = {
  proto: [Shape, Block],
  tag: 'input',
  style,

  props: (el, s) => ({
    type: 'input',
    value: s[el.key],
    placeholder: 'Type in',
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
