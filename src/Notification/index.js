'use strict'
import { Shape, IconText, Direction } from '../'

import style from './style'

export default {
  style,
  proto: [Shape],
  caption: {
    proto: [IconText],
    _icon: {},
    icon: 'info',
    text: 'Notification'
  },
  p: 'is not always a distraction'
}
