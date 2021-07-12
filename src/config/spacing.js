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

export const mapPadding = (val, props) => {
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
      wrapFallBack('paddingBlock', 0),
      wrapFallBack('paddingInline', 1)
    ]
  }
  if (length === 3) {
    return [
      wrapFallBack('paddingBlockStart', 0),
      wrapFallBack('paddingInline', 1),
      wrapFallBack('paddingBlockEnd', 2)
    ]
  } else if (length === 4) {
    return [
      wrapFallBack('paddingBlockStart', 0),
      wrapFallBack('paddingInlineStart', 1),
      wrapFallBack('paddingBlockEnd', 2),
      wrapFallBack('paddingInlineEnd', 3)
    ]
  }

  return fallBack({ type, prop: 'padding', val, prefix })
}

export const SPACING = defaultProps
