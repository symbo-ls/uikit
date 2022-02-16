'use strict'

import { Shape } from '@symbo.ls/shape'
import { Block } from '@symbo.ls/block'
import { Text } from '@symbo.ls/text'

export const Input = {
  extends: [Shape, Block, Text],
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
    disabled: ({ props }) => props.disabled || null,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },

  on: {
    input: (event, { key, value, props }) => {
      props.onInput && props.onInput(event)
    },
    change: (event, { key, value, props }) => {
      props.onChange && props.onChange(event)
    }
  }
}
