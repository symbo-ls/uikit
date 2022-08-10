'use strict'

import { IconText, Input } from '.'

export const Field = {
  proto: IconText,
  props: (el, s) => ({
    value: s[el.key],

    depth: 16,
    placeholder: '',
    padding: 'A B',
    round: 'C',
    type: 'text',
    position: 'relative',
    width: '16em',

    style: {
      appearance: 'none',
      outline: 0,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },

    input: {
      width: '100%',
      height: '100%',
      border: 'none'
    },

    svg: {
      position: 'absolute',
      right: '1em'
    }
  }),

  input: { proto: Input }
}
