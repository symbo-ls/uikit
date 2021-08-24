'use strict'

import { SEQUENCE, TYPOGRAPHY } from '.'
import { Arrayize, fallBack, generateSequence } from '../utils'

const defaultProps = {
  base: TYPOGRAPHY.base,
  type: 'spacing',
  ratio: SEQUENCE['phi'],
  range: [-5, +7],
  subSequence: true,
  sequence: {},
  scales: {}
}

generateSequence(defaultProps)

export const mapSpacing = (val, property = 'padding', props) => {
  const prefix = '--spacing-'
  const type = (props ? generateSequence(props) : defaultProps).sequence

  const stack = Arrayize(val)
  if (!stack) return

  const length = stack.length

  const wrapFallBack = (prop, i) => fallBack({
    type,
    prop,
    val: stack[i],
    prefix
  })

  if (length === 2) {
    return [
      wrapFallBack(property + 'Block', 0),
      wrapFallBack(property + 'Inline', 1)
    ]
  }
  if (length === 3) {
    return [
      wrapFallBack(property + 'BlockStart', 0),
      wrapFallBack(property + 'Inline', 1),
      wrapFallBack(property + 'BlockEnd', 2)
    ]
  } else if (length === 4) {
    return [
      wrapFallBack(property + 'BlockStart', 0),
      wrapFallBack(property + 'InlineStart', 3),
      wrapFallBack(property + 'BlockEnd', 2),
      wrapFallBack(property + 'InlineEnd', 1)
    ]
  }

  return fallBack({ type, prop: property, val, prefix })
}

export const SPACING = defaultProps
