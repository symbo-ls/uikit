'use strict'

import { Shape } from '@symbo-ls/shape'

import style from './style'

export const Select = {
  proto: Shape,
  tag: 'select',
  style,

  childProto: {
    tag: 'option',
    props: {
      value: '',
      selected: '',
      disabled: ''
    },
    attr: {
      value: ({ props }) => props.value,
      selected: ({ props }) => props.selected,
      disabled: ({ props }) => props.disabled
    }
  }
}
