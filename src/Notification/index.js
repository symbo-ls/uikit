'use strict'
import { Shape, IconText, Direction } from '../'

import style from './style'

export default {
  style,
  proto: [Shape, IconText, Direction],
  props: {
    icon: 'info'
  },
  article: {
    caption: 'Notification',
    p: 'is not always a distraction'
  }
}
