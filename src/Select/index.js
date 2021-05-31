'use strict'

import Shape from '../Shape'
import style from './style'

export default {
  proto: Shape,
  tag: 'select',
  style,

  childProto: { tag: 'option' }
}
