'use strict'

import { Img, Flex } from '.'

export const User = {
  extend: Img,
  key: 'nikoloza',
  props: ({ key }) => ({
    borderRadius: '100%',
    boxSize: 'B',
    src: `https://avatars.dicebear.com/api/adventurer-neutral/${key}.svg`,
    cursor: 'pointer'
  })
}

export const UserBundle = {
  extend: Flex,
  childExtend: {
    extend: User,
    props: ({ key }) => ({
      boxSize: 'B1',
      border: '0.1312em, black .85, solid',
      ':not(:last-child)': {
        margin: '0 -Y2 0 0'
      }
    })
  }
}
