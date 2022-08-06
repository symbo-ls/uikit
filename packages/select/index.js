'use strict'

import { Shape } from '@symbo.ls/shape'

import style from './style'

export const Select = {
  tag: 'select',

  props: {
    fontSize: 'A',
    css: {
      border: 'none',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }
  },

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
