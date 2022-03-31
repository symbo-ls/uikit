'use strict'

import { SEQUENCE } from '.'
import { fallBack, generateSequence, findHeadings } from '../utils'

const defaultProps = {
  default: 16,
  base: 16,
  type: 'font-size',
  ratio: SEQUENCE['minor-third'],
  range: [-3, +12],
  h1Matches: +6,
  styles: {
    lineHeight: 1.5
  },
  sequence: {},
  scales: {}
}

export const applyTypographySequence = () => {
  generateSequence(defaultProps)

  if (defaultProps.h1Matches) {
    const HEADINGS = findHeadings(defaultProps)
    const { styles } = defaultProps
    for (const k in HEADINGS) {
      styles[`h${parseInt(k) + 1}`] = {
        fontSize: `${HEADINGS[k].scaling}em`
      }
    }
  }
}

export const mapFontSize = val => fallBack({
  type: defaultProps.sequence,
  prop: 'fontSize',
  val,
  prefix: '--font-size-'
})

export const TYPOGRAPHY = defaultProps
