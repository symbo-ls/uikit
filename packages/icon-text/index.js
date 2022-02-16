'use strict'

import style from './style'

import { Block } from '@symbo.ls/block'
import { Icon } from '@symbo.ls/icon'
import { Direction } from '@symbo.ls/direction'
import { Text } from '@symbo.ls/text'

export const IconText = {
  style,

  extends: [Text, Direction, Block],
  props: {
    flexAlign: 'center flex-start'
  },

  icon: { extends: Icon, if: ({ props }, s) => props.icon },

  text: ({ props }) => props.text
}
