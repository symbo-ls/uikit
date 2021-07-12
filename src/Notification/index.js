'use strict'
import { Shape, IconText, Direction } from '../'

import style from './style'

export const Notification = {
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
