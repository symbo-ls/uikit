'use strict'

import { Img, Flex } from '.'

export const Avatar = {
  extend: Img,
  key: 'nikoloza',
  props: {
    display: 'block',
    avatarType: 'initials',
    borderRadius: '100%',
    boxSize: 'B',
    cursor: 'pointer'
  },
  attr: {
    src: ({ key, props }) => props.src || `https://avatars.dicebear.com/api/${props.avatarType || 'adventurer-neutral'}/${props.key || key}.svg`
  }
}

export const AvatarBundle = {
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
