'use strict'

import { Img, Flex } from '.'

export const User = {
  extend: Img,
  props: {
    borderRadius: '100%',
    boxSize: 'B',
    src: 'https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5',
    style: {
      cursor: 'pointer'
    }
  }
}

export const UserBundle = {
  extend: Flex,
  childExtend: {
    extend: User,
    props: {
      boxSize: 'B1',
      border: '0.1312em, black .85, solid',
      ':not(:last-child)': {
        margin: '0 -Y2 0 0'
      }
    }
  }
}
