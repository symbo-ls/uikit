'use strict'
import { style } from './style'
import { Shape } from '../Shape'

export default {
  proto: Shape,
  
  tag: 'input',
  style,

  define: { placeholder: param => param },
  attr: {
    placeholder: element => element.placeholder
  }
}
