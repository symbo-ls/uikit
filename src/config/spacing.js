'use strict'

import sequence from './sequence'
import Typography from './typography'
import { generateSequence, fallBack, isObjectLike, isObject, isArray } from '../utils'
import { isString } from '@rackai/domql/src/utils'

const defaultProps = {
  base: Typography.base,
  type: 'spacing',
  ratio: sequence['phi'],
  range: [-5, +7],
  subSequence: true,
  sequence: {},
  scales: {}
}

generateSequence(defaultProps)

const Arrayize = val => {
  const isString = typeof val === 'string'
  if (isString) return val.split(' ')
  if (isObject(val)) return Object.keys(val).map(v => val[v])
  if (isArray(val)) return val
}

export const mapPadding = val => {
  const prefix = '--spacing-'
  const type = defaultProps.sequence

  let stack = Arrayize(val)
  if (!stack) return

  const length = stack.length

  const wrapFallBack = (prop, i) => fallBack({
    type,
    prop,
    val: stack[i],
    prefix
  })

  if (length === 2) return [
    wrapFallBack('paddingBlock', 0),
    wrapFallBack('paddingInline', 1)
  ]
  if (length === 3) return [
    wrapFallBack('paddingBlockStart', 0),
    wrapFallBack('paddingInline', 1),
    wrapFallBack('paddingBlockEnd', 2)
  ]
  else if (length === 4) return [
    wrapFallBack('paddingBlockStart', 0),
    wrapFallBack('paddingInlineStart', 1),
    wrapFallBack('paddingBlockEnd', 2),
    wrapFallBack('paddingInlineEnd', 3)
  ]

  return fallBack({ type, prop: 'padding', val, prefix })
}

export default defaultProps
