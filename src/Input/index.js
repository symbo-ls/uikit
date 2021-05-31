'use strict'

import { Shape, IconText } from '..'
import style from './style'

export default {
  proto: Shape,
  tag: 'input',
  style,
  define: {
    placeholder: param => param,
    value: param => param,
    type: param => param
  },
  attr: {
    placeholder: element => element.placeholder,
    value: element => element.value,
    type: element => element.type
  },
  round: 26
}
