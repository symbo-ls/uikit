'use strict'
import { buttonSquare } from '../Button'
import Shape from '../Shape'

export default {
  tag: 'nav',
  proto: [Shape],
  style: {
    display: 'flex'
  },
  childProto: {
    proto: buttonSquare,
    theme: 'transparent'
  }
}
