'use strict'

import { SVG } from './atoms'
import { toCamelCase } from '@symbo.ls/utils'

export const Icon = {
  extend: SVG,
  props: ({ key, props, parent, context }) => {
    const { ICONS } = context && context.SYSTEM
    const iconName = props.inheritedString || props.name || props.icon || key
    const camelCase = toCamelCase(iconName)

    const isArray = camelCase.split(/([a-z])([A-Z])/g)

    let activeIconName
    if (props.active) {
      activeIconName = props['.active'].name || props['.active'].icon
    }
    if (parent.props.active && parent.props['.active'] && parent.props['.active'].icon) {
      activeIconName = parent.props['.active'].icon.name || parent.props['.active'].icon.icon || parent.props['.active'].icon
    }

    const iconFromLibrary = ICONS[activeIconName] || ICONS[camelCase] || (ICONS[isArray[0] + isArray[1]]) || ICONS[isArray[0]] || ICONS['noIcon']

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
