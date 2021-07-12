'use strict'

import { SquareButton } from '../Button'
import Shape from '../Shape'

export const ToolBar = {
  tag: 'nav',
  proto: Shape,
  style: { display: 'flex' },
  childProto: {
    proto: [SquareButton],
    props: { round: 12 }
  }
}
