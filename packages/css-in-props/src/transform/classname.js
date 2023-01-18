'use strict'

import { merge, isFunction, isObject, isArray } from '@domql/utils'
import { keySetters } from './subProps'

import { registry as reg } from '../registry'

export const transformClassname = (props, registry = reg) => {
  const CLASS_NAMES = {}
  if (!isObject(props)) return

  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)]
    const reg = registry
    const hasCSS = reg[key]

    if (setter) setter(key, props[key], CLASS_NAMES)
    else if (isFunction(hasCSS)) {
      const stack = hasCSS(props)
      const exec = isArray(stack) ? stack.reduce((a, c) => {
        return merge(a, c)
      }, {}) : stack
      merge(CLASS_NAMES, exec)
    }
  }

  return CLASS_NAMES
}
