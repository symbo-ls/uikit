'use strict'

import { Shape } from '^'
import { style } from './style'

export default {
  proto: Shape,
  
  tag: 'input',
  style,

  define: { placeholder: param => param },
  attr: {
    placeholder: element => element.placeholder
  }
}
