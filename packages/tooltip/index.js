'use strict'

import { Shape } from '@symbo.ls/shape'

import style from './style'

export const Tooltip = {
  style,
  proto: Shape,
  props: { theme: 'purple2' },
  caption: 'And tooltip is coming',
  span: 'and winter too'
}