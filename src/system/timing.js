'use strict'

import { TIMING } from '../defaultConfig'
import {
  applySequenceVars,
  generateSequence,
  getSequenceValuePropertyPair
} from '../utils'

export const applyTimingSequence = () => {
  generateSequence(TIMING)
  applySequenceVars(TIMING)
}

export const getTimingFunction = value => TIMING[value] || value

export const getTimingByKey = value => getSequenceValuePropertyPair(
  value,
  'timing',
  TIMING
)
