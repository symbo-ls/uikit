'use strict'

import { Shape, IconText, Input } from '../'
import style from './style'

export default {
  proto: [Shape, IconText],
  style,
  define: {
    placeholder: param => param,
    value: param => param
  },
  round: 26,
  theme: 'white',
  input: {
    proto: Input,
    round: 26,
  theme: el => el.parent.theme,
  value: el => el.parent.value,
    placeholder: el => el.parent.placeholder
  }
}
