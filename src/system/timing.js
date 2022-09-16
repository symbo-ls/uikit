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

export const getTimingByKey = value => getSequenceValuePropertyPair(
  value,
  'duration',
  TIMING
)
