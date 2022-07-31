'use strict'

import { merge, isFunction } from '@domql/utils'
import { classNames } from './classNames'
import { keySetters } from './subprops'

export * from '@symbo.ls/scratch'

export const transformClassName = props => {
  const CLASS_NAMES = {}

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    const hasCSS = classNames[key]
    if (setter) setter(key, props[key], CLASS_NAMES)
    else if (isFunction(hasCSS)) merge(CLASS_NAMES, hasCSS)(props)
  }

  return CLASS_NAMES
}
