'use strict'

import { Shape } from '@symbo.ls/shape'

import style from './style'

export const Select = {
  extends: Shape,
  tag: 'select',
  style,

  childExtends: {
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
