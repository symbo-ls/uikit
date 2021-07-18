'use strict'

import { IconText, Input } from '../'
import style from './style'

export const Field = {
  style,
  proto: [IconText],
  props: (el, s) => ({
    depth: 16,
    placeholder: 'Type in',
    value: s[el.key],
    spacing: 'A B',
    round: 'C',
    theme: 'field'
  }),
  input: {
    proto: Input,
    props: el => el.parent.props
  }
}
