'use strict'

import { Shape, IconText } from '../'
import style from './style'

export default {
  proto: [Shape, IconText],
  style,
  round: 26,
  theme: 'White',
  define: {
    placeholder: param => param
  },
  attr: {
    placeholder: element => element.placeholder
  },
  input: {
    proto: Shape,
    round: 26,
    attr: {
      value: 'Today'
    }
  }
}
