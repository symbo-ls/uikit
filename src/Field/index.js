'use strict'

import { Shape, IconText, Input } from '../'
import style from './style'

export default {
  proto: [Shape, IconText],
  style,
  props: (el, s) => console.log(el, s) && ({
    placeholder: 'Type in',
    value: s[el.key],
    round: 26,
    theme: 'field',
  }),
  input: {
    proto: Input,
    props: {
      round: ({ props }) => props.round,
      theme: ({ props }) => props.theme,
      value: ({ props }) => props.value,
      placeholder: ({ props }) => props.placeholder,
      round: ({ props }) => props.round
    }
  }
}
