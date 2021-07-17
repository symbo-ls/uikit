'use strict'

import { Shape, IconText, Input } from '../'
import style from './style'

export const Field = {
  proto: [Shape, IconText],
  style,
  props: (el, s) => ({
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
