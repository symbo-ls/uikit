'use strict'

import { classNames } from './classNames'
import { keySetters } from './subprops'

export * from '@symbo.ls/scratch'

export const transformClassname = props => {
  const CLASS_NAMES = {}

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    const hasCSS = classNames[key]
    if (setter) setter(key, props[key], CLASS_NAMES)
    else if (hasCSS) CLASS_NAMES[key] = hasCSS
  }

  return CLASS_NAMES
}
