'use strict'

import sequence from './sequence'
import Typography from './typography'
import { generateSequence, fallBack, isObjectLike } from '../utils'

const defaultProps = {
  base: Typography.base,
  type: 'spacing',
  ratio: sequence['phi'],
  range: [-5, +7],
  sequence: {},
  scales: {}
}

generateSequence(defaultProps)

export const mapPadding = val => {
  const prefix = '--spacing-'
  const type = defaultProps.sequence
  const wrapFallBack = (prop, i) => fallBack({ type, prop, val: val[i], prefix })

  if (isObjectLike(val)) {
    const length = Object.keys(val)
    if (length === 2) {
      return [
        wrapFallBack('paddingBlock', 0),
        wrapFallBack('paddingInline', 1)
      ]
    } else if (length === 3) {
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
    } else return wrapFallBack('padding', 0)
  } else return fallBack({ type, prop: 'padding', val, prefix })
}

export default defaultProps
