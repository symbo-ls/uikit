'use strict'

import { SVG } from './atoms'

import { ICONS } from '@symbo.ls/scratch'
import { toCamelCase } from '@symbo.ls/utils'

export const Icon = {
  extend: SVG,
  props: ({ key, props, parent }) => {
    const iconName = props.inheritedString || props.name || props.icon || key
    const camelCase = toCamelCase(iconName)
    const isArray = camelCase.split(/([a-z])([A-Z])/g)

    const iconFromLibrary = ICONS[camelCase] || (ICONS[isArray[0] + isArray[1]]) || ICONS[isArray[0]] || ICONS['noIcon']

    let activeIconName
    if (props.active) {
      activeIconName = props['.active'].name || props['.active'].icon
    }

    return {
      width: 'A',
      height: 'A',
      display: 'inline-block',
      src: activeIconName || iconFromLibrary,
      style: { fill: 'currentColor' }
    }
  },
  attr: { viewBox: '0 0 24 24' }
}
