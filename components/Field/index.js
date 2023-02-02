'use strict'

import { Focusable } from '@symbo.ls/atoms'
import { IconText } from '@symbo.ls/icon'
import { Input } from '@symbo.ls/input'

export const Field = {
  extend: [IconText],

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

  input: { extend: [Focusable, Input] }
}
