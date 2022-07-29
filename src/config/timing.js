'use strict'

import { SEQUENCE } from '.'
import { fallBack, generateSequence } from '../utils'

const defaultProps = {
  default: 150,
  base: 150,
  type: 'timing',
  ratio: SEQUENCE['minor-third'],
  range: [-3, +12],
  sequence: {},
  scales: {}
}

export const applyTimingSequence = () => {
  generateSequence(defaultProps)
}

export const mapTiming = val => fallBack({
  type: defaultProps.sequence,
  prop: 'timing',
  val,
  unit: 'ms',
  prefix: '--duration-'
})

export const TIMING = defaultProps
