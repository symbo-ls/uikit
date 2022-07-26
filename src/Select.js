'use strict'

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
