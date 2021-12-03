'use strict'

import { IconText, Input } from '../'
import style from './style'

export const Field = {
  style,
  proto: [IconText],
  props: (el, s) => ({
    depth: 16,
    placeholder: '',
    value: s[el.key],
    padding: 'A B',
    round: 'C',
    type: 'text'
  }),
  input: {
    proto: Input,
    props: el => el.parent.props
  }
}
