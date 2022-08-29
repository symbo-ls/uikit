'use strict'

import { SEQUENCE, TYPOGRAPHY } from '.'
import { Arrayize, getSequenceValue, generateSequence, applySequenceVars, merge } from '../utils'

const defaultProps = {
  base: TYPOGRAPHY.base,
  type: 'spacing',
  ratio: SEQUENCE.phi,
  range: [-5, +15],
  subSequence: true,
  sequence: {},
  scales: {},
  vars: {}
}

const runThroughMedia = props => {
  for (const prop in props) {
    const mediaProps = props[prop]
    if (prop.slice(0, 1) === '@') {
      const { type, base, ratio, range, subSequence, h1Matches, unit } = props

      merge(mediaProps, {
        type,
        base,
        ratio,
        range,
        subSequence,
        h1Matches,
        unit,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      })

      generateSequence(mediaProps)

      const mediaName = prop.slice(1)
      applySequenceVars(mediaProps, mediaName)
    }
  }
}

export const applySpacingSequence = () => {
  generateSequence(defaultProps)
  applySequenceVars(defaultProps)
  runThroughMedia(defaultProps)
}

const getSequence = (props) => {
  if (!props) return
  const hasGenerated = Object.keys(props.sequence).length > 0
  return hasGenerated ? props : generateSequence(props)
}

export const getSpacingByKey = (val, property = 'padding', props, unit) => {
  const prefix = '--spacing-'

  const generatedSequence = getSequence(props)
  const type = (generatedSequence || defaultProps).sequence

  const stack = Arrayize(val)
  if (!stack) return

  const length = stack.length

  const wrapSequenceItem = (prop, i) => getSequenceValue({
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
      wrapSequenceItem(property + 'Block' + suffix, 0),
      wrapSequenceItem(property + 'Inline' + suffix, 1)
    ]
  }
  if (length === 3) {
    return [
      wrapSequenceItem(property + 'BlockStart' + suffix, 0),
      wrapSequenceItem(property + 'Inline' + suffix, 1),
      wrapSequenceItem(property + 'BlockEnd' + suffix, 2)
    ]
  } else if (length === 4) {
    return [
      wrapSequenceItem(property + 'BlockStart' + suffix, 0),
      wrapSequenceItem(property + 'InlineStart' + suffix, 3),
      wrapSequenceItem(property + 'BlockEnd' + suffix, 2),
      wrapSequenceItem(property + 'InlineEnd' + suffix, 1)
    ]
  }

  return getSequenceValue({ type, prop: property, val, prefix })
}

export const SPACING = defaultProps
