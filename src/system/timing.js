'use strict'

import { TIMING } from '../defaultConfig'
import {
  applySequenceVars,
  generateSequence,
  getSequenceValue
} from '../utils'

export const applyTimingSequence = () => {
  generateSequence(TIMING)
  applySequenceVars(TIMING)
}

export const getTimingByKey = val => getSequenceValue({
  type: TIMING.sequence,
  prop: 'duration',
  val,
  unit: 'ms',
  prefix: '--duration-'
})
