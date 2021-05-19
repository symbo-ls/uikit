'use strict'
import { Shape, IconText, Direction } from '../'

import style from './style'

export default {
  style,
  proto: [Shape, IconText, Direction],
  _icon: {},
  icon: 'info',
  article: {
    caption: 'Notification',
    p: 'is not always a distraction'
  }
}
