'use strict'

import { SEQUENCE, TYPOGRAPHY } from '.'
import { Arrayize, fallBack, generateSequence } from '../utils'

const defaultProps = {
  base: TYPOGRAPHY.base,
  type: 'spacing',
  ratio: SEQUENCE.phi,
  range: [-5, +15],
  subSequence: true,
  sequence: {},
  scales: {}
}

export const applySpacingSequence = () => {
  generateSequence(defaultProps)
}

const getSequence = (props) => {
  if (!props) return
  const hasGenerated = Object.keys(props.sequence).length > 0
  return hasGenerated ? props : generateSequence(props)
}

export const mapSpacing = (val, property = 'padding', props, unit) => {
  const prefix = '--spacing-'

  const generatedSequence = getSequence(props)
  const type = (generatedSequence || defaultProps).sequence

  const stack = Arrayize(val)
  if (!stack) return

  const length = stack.length

  const wrapFallBack = (prop, i) => fallBack({
    type,
    prop,
    val: stack[i],
    prefix,
    unit
  })

  let suffix = ''
  if (property === 'borderWidth') {
    property = 'border'
    suffix = 'Width'
  }

  if (length === 2) {
    return [
      wrapFallBack(property + 'Block' + suffix, 0),
      wrapFallBack(property + 'Inline' + suffix, 1)
    ]
  }
  if (length === 3) {
    return [
      wrapFallBack(property + 'BlockStart' + suffix, 0),
      wrapFallBack(property + 'Inline' + suffix, 1),
      wrapFallBack(property + 'BlockEnd' + suffix, 2)
    ]
  } else if (length === 4) {
    return [
      wrapFallBack(property + 'BlockStart' + suffix, 0),
      wrapFallBack(property + 'InlineStart' + suffix, 3),
      wrapFallBack(property + 'BlockEnd' + suffix, 2),
      wrapFallBack(property + 'InlineEnd' + suffix, 1)
    ]
  }

  return fallBack({ type, prop: property, val, prefix })
}

export const SPACING = defaultProps
