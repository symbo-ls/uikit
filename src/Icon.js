'use strict'

import { ICONS } from '@symbo.ls/scratch'
import { SVG } from '.'

export const Icon = {
  proto: SVG,
  props: ({ key, props, parent }) => {
    const iconName = ICONS[props.inheritedString || props.name || props.icon || key || 'noIcon']

    return {
      width: 'A',
      height: 'A',
      display: 'inline-block',
      src: iconName,
      css: { fill: 'currentColor' }
    }
  },
  attr: { viewBox: '0 0 24 24' }
}
