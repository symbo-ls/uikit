'use strict'

import { SEQUENCE } from '.'
import { fallBack, generateSequence } from '../utils'

const defaultProps = {
  base: 16,
  type: 'font-size',
  ratio: SEQUENCE['minor-third'],
  range: [-3, +12],
  sequence: {},
  h1Matches: +6,
  scales: {}
}

generateSequence(defaultProps)

export const mapFontSize = val => fallBack({
  type: defaultProps.sequence,
  prop: 'fontSize',
  val,
  prefix: '--font-size-'
})

export const TYPOGRAPHY = defaultProps
