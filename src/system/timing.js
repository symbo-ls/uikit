'use strict'

import { toCamelCase } from '@symbo.ls/utils'
import { getActiveConfig } from '../factory'
import {
  applySequenceVars,
  generateSequence,
  getSequenceValuePropertyPair
} from '../utils'

export const applyTimingSequence = () => {
  const CONFIG = getActiveConfig()
  const { TIMING } = CONFIG
  generateSequence(TIMING)
  applySequenceVars(TIMING)
}

export const getTimingFunction = value => {
  const CONFIG = getActiveConfig()
  const { TIMING } = CONFIG
  return TIMING[value] || TIMING[toCamelCase(value)] || value
}

export const getTimingByKey = (value, property = 'timing') => {
  const CONFIG = getActiveConfig()
  const { TIMING } = CONFIG
  return getSequenceValuePropertyPair(
    value,
    property,
    TIMING
  )
}
