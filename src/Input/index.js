'use strict'

import { Shape, IconText, Block } from '..'
import style from './style'

export default {
  proto: [Shape, Block],
  tag: 'input',
  style,

  props: (el, s) => ({
    type: 'input',
    value: ({ key }, s) => s[el.key],
    placeholder: 'Type in',
    round: 26,
    spacing: 'a',
    theme: '--transparent'
  }),

  attr: {
    placeholder: ({ props }) => props.placeholder,
    value: ({ props }) => props.value,
    type: ({ props }) => props.type
  },
}
