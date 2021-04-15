'use strict'

import { styleUser, styleUserBundle } from './style'

const User = {
  style: styleUser,
  tag: 'img',
  attr: {
    src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5'
  }
}

export const userBundle = {
  style: styleUserBundle,
  users: {
    childProto: User,
    ...[{}]
  },
  span: 'join classroom'
}

export default User