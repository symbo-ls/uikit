'use strict'

import { SVG } from '.'

import { ICONS } from '@symbo.ls/scratch'

export const Icon = {
  proto: SVG,
  props: ({ key, props, parent }) => {
    let iconName = props.inheritedString || props.name || props.icon || key

    const isArray = iconName.split(' ')
    const secondArg = props.iconModifier || isArray[1]

    if (secondArg) iconName = isArray[0] + secondArg.slice(0, 1).toUpperCase() + secondArg.slice(1)
    const iconFromLibrary = ICONS[iconName] || ICONS[isArray[0]] || ICONS['noIcon']

    return {
      width: 'A',
      height: 'A',
      display: 'inline-block',
      src: iconFromLibrary,
      style: { fill: 'currentColor' }
    }
  },
  attr: { viewBox: '0 0 24 24' }
}
