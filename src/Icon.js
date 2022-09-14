'use strict'

import { SVG } from '.'

import { ICONS } from '@symbo.ls/scratch'
import { camelize } from '@symbo.ls/utils'

export const Icon = {
  extend: SVG,
  props: ({ key, props, parent }) => {
    const iconName = props.inheritedString || props.name || props.icon || key
    const camelCase = camelize(iconName)
    const isArray = camelCase.split(/([a-z])([A-Z])/g)

    const iconFromLibrary = ICONS[camelCase] || (ICONS[isArray[0] + isArray[1]]) || ICONS[isArray[0]] || ICONS['noIcon']

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
