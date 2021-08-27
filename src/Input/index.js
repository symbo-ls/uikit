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
    spacing: 'A B',
    theme: 'transparent'
  }),

  attr: {
    placeholder: ({ props }) => props.placeholder,
    value: ({ props }) => props.value,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },

  on: {
    input: ({ key, value, props }) => {

    }
  }
}
