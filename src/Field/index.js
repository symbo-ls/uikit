'use strict'

import { Shape, IconText, Input } from '../'
import style from './style'

export default {
  proto: [Shape, IconText],
  style,
  round: 26,
  theme: 'white',
  input: {
    proto: Input,
    round: 26,
    attr: {
      value: el => el.parent.value
    }
  }
}
