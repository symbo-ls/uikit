'use strict'
import { buttonSquare } from '../Button'

export default {
  tag: 'nav',
  style: {
    display: 'flex'
  },
  childProto: {
    proto: buttonSquare,
    theme: 'transparent'
  }
}
