'use strict'
import { SquareButton } from '../Button'
import Shape from '../Shape'

export default {
  tag: 'nav',
  proto: [Shape],
  style: {
    display: 'flex'
  },
  childProto: {
    proto: [SquareButton],
    round: 12
  }
}
