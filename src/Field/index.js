'use strict'

import { Shape, IconText, Input } from '../'
import style from './style'

export const Field = {
  proto: [Shape, IconText],
  style,
  props: (el, s) => ({
    placeholder: 'Type in',
    value: s[el.key],
    round: 26,
    theme: 'field'
  }),
  input: {
    proto: Input,
    props: {
      round: ({ props }) => props.round,
      theme: ({ props }) => props.theme,
      value: ({ props }) => props.value,
      placeholder: ({ props }) => props.placeholder
    }
  }
}
