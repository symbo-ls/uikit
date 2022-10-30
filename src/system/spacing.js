'use strict'

import { getActiveConfig } from '../factory'

import { isString } from '@domql/utils'
import {
  applySequenceVars,
  arrayze,
  generateSequence,
  getSequenceValuePropertyPair,
  merge
} from '../utils'

const runThroughMedia = sequenceProps => {
  for (const prop in sequenceProps) {
    const mediaProps = sequenceProps[prop]
    if (prop.slice(0, 1) === '@') {
      const { type, base, ratio, range, subSequence, h1Matches, unit } = sequenceProps

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
  const CONFIG = getActiveConfig()
  const { SPACING } = CONFIG
  generateSequence(SPACING)
  applySequenceVars(SPACING)
  runThroughMedia(SPACING)
}

const getSequence = (sequenceProps) => {
  const CONFIG = getActiveConfig()
  const { SPACING } = CONFIG
  if (!sequenceProps) return SPACING
  const hasGenerated = Object.keys(sequenceProps.sequence).length > 0
  return hasGenerated ? sequenceProps : generateSequence(sequenceProps)
}

export const getSpacingByKey = (
  value,
  propertyName = 'padding',
  sequenceProps
) => {
  const sequence = getSequence(sequenceProps)

  const stack = arrayze(value)
  if (!stack) return

  if (isString(value) && value.includes('calc')) {
    return { [propertyName]: value }
  }

  if (stack.length > 1) {
    let suffix = ''
    if (propertyName === 'borderWidth') {
      propertyName = 'border'
      suffix = 'Width'
    }

    const directions = {
      2: ['Block', 'Inline'],
      3: ['BlockStart', 'Inline', 'BlockEnd'],
      4: ['BlockStart', 'InlineEnd', 'BlockEnd', 'InlineStart']
    }

    const wrapSequenceValueByDirection = (direction, i) => getSequenceValuePropertyPair(
      stack[i],
      propertyName + direction + suffix,
      sequence
    )

    return directions[stack.length].map((dir, key) => wrapSequenceValueByDirection(dir, key))
  }

  return getSequenceValuePropertyPair(
    value,
    propertyName,
    sequence
  )
}

export const getSpacingBasedOnRatio = (props, propertyName, val) => {
  const CONFIG = getActiveConfig()
  const { SPACING } = CONFIG

  const { spacingRatio, unit } = props
  const value = val || props[propertyName]

  if (spacingRatio) {
    let sequenceProps = SPACING[spacingRatio]

    if (!sequenceProps) {
      const { type, base, range, subSequence } = SPACING

      sequenceProps = SPACING[spacingRatio] = merge({
        ratio: spacingRatio,
        type: type + '-' + spacingRatio,
        unit,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      }, {
        base,
        range,
        subSequence,
        ratio: SPACING.ratio,
        unit: SPACING.unit
      })
    }

    applySequenceVars(sequenceProps, null, { useDefault: false })

    return getSpacingByKey(value, propertyName, sequenceProps)
  }
  return getSpacingByKey(value, propertyName)
}
