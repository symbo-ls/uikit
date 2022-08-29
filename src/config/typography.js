'use strict'

import { CONFIG } from '../factory'
import { SEQUENCE, MEDIA } from '.'
import { getSequenceValue, generateSequence, findHeadings, merge, applySequenceVars } from '../utils'

const defaultProps = {
  browserDefault: 16,
  base: 16,
  type: 'font-size',
  ratio: SEQUENCE['minor-third'],
  range: [-3, +12],
  h1Matches: +6,
  lineHeight: 1.5,
  unit: 'em',
  styles: {},
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

      const query = MEDIA[mediaName]
      defaultProps.styles[`@media screen and ${query}`] = {
        fontSize: mediaProps.base / defaultProps.browserDefault + unit
      }
    }
  }
}

const applyHeadings = (props) => {
  if (props.h1Matches) {
    const unit = props.unit
    const HEADINGS = findHeadings(props)
    const { styles } = props
    for (const k in HEADINGS) {
      styles[`h${parseInt(k) + 1}`] = {
        fontSize: CONFIG.useVariable ? `var(${HEADINGS[k].variable})` : `${HEADINGS[k].scaling}${unit}`
      }
    }
  }
}

export const applyTypographySequence = () => {
  generateSequence(defaultProps)
  applyHeadings(defaultProps)
  applySequenceVars(defaultProps)
  runThroughMedia(defaultProps)
}

export const getFontSizeByKey = val => getSequenceValue({
  type: defaultProps.sequence,
  prop: 'fontSize',
  val,
  prefix: '--font-size-'
})

console.log(defaultProps)

export const TYPOGRAPHY = defaultProps
