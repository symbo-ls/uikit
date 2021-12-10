'use strict'

import style from './style'

import { SVG } from '@symbo.ls/svg'

export const Icon = {
  proto: SVG,
  style,
  define: { name: param => param },
  name: ({ props }) => props.icon,
  attr: { viewBox: '0 0 24 24' },
  src: ({ key, name }) => name || key || 'noIcon'
}
