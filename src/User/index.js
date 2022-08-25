'use strict'

import { Shape, Block } from '..'
import { styleUser, styleUserBundle } from './style'

export const User = {
  extend: [Shape, Block],
  props: { boxSize: 'B B' },
  style: styleUser,
  tag: 'img',
  attr: {
    src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5'
  }
}

export const UserBundle = {
  style: styleUserBundle,
  users: {
    childExtend: User,
    ...[{}]
  },
  span: 'join classroom'
}

export default User
