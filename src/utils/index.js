'use strict'

export function merge (obj, original) {
  for (const e in original) {
    const objProp = obj[e]
    const originalProp = original[e]
    if (objProp === undefined) {
      obj[e] = originalProp
    }
  }
  return obj
}
