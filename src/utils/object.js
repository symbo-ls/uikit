'use strict'

export const isString = arg => typeof arg === 'string'

export const isArray = arg => Array.isArray(arg)

export const isObject = arg => {
  if (arg === null) return false
  return (typeof arg === 'object') && (arg.constructor === Object)
}

export const isObjectLike = arg => {
  if (arg === null) return false
  return (typeof arg === 'object')
}

export const merge = (obj, original) => {
  for (const e in original) {
    const objProp = obj[e]
    const originalProp = original[e]
    if (objProp === undefined) {
      obj[e] = originalProp
    }
  }
  return obj
}

export const deepMerge = (obj, obj2) => {
  for (const e in obj2) {
    const objProp = obj[e]
    const obj2Prop = obj2[e]
    if (objProp === undefined) {
      obj[e] = obj2Prop
    } else if (isObjectLike(objProp) && isObject(obj2Prop)) {
      deepMerge(objProp, obj2Prop)
    }
  }
  return obj
}

export const arrayze = val => {
  if (isString(val)) return val.split(' ')
  if (isObject(val)) return Object.keys(val).map(v => val[v])
  if (isArray(val)) return val
}

export const isFunction = arg => typeof arg === 'function'
