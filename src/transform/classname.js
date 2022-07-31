'use strict'

import { merge, isFunction } from '@domql/utils'
import { keySetters } from './subProps'

import { registry } from '../registry'

export const transformClassname = props => {
  const CLASS_NAMES = {}

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    const hasCSS = registry[key]

    if (setter) setter(key, props[key], CLASS_NAMES)
    else if (isFunction(hasCSS)) merge(CLASS_NAMES, hasCSS(props))
  }

  return CLASS_NAMES
}
