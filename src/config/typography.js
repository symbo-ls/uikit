'use strict'

import { CONFIG, CSS_VARS } from '../factory'
import { SEQUENCE, MEDIA, UNIT } from '.'
import { getSequenceValue, generateSequence, findHeadings, merge } from '../utils'

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

const applyVars = (props, mediaName) => {
  const unit = UNIT.default
  const { sequence, scales } = props
  console.log(sequence)
  for (const key in sequence) {
    const item = sequence[key]
    const value = scales[key] + unit
    const finalVariable = item.variable + (mediaName ? '-' + mediaName : '')
    CSS_VARS[finalVariable] = value
    document.documentElement.style.setProperty(finalVariable, value)
  }
  console.log(CSS_VARS)
}

const applyMediaVars = (props, mediaName) => {
  const query = MEDIA[mediaName]
  // if (!window.matchMedia(query).matches) return
  applyVars(props, mediaName)
}

const runThroughMedia = props => {
  for (const prop in props) {
    const mediaProps = props[prop]
    if (prop.slice(0, 1) === '@') {
      const { type, base, ratio, range, subSequence, h1Matches } = props

      merge(mediaProps, {
        type,
        base,
        ratio,
        range,
        subSequence,
        h1Matches,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      })

      generateSequence(mediaProps)
      const mediaName = prop.slice(1)
      const query = MEDIA[mediaName]
      applyMediaVars(mediaProps, mediaName)
      applyHeadings(mediaProps)
      props.styles[`@media screen and ${query}`] = mediaProps.styles
    }
  }
}

const applyHeadings = (props) => {
  if (props.h1Matches) {
    const unit = UNIT.default
    const HEADINGS = findHeadings(props)
    const { styles } = props
    for (const k in HEADINGS) {
      styles[`h${parseInt(k) + 1}`] = {
        fontSize: CONFIG.useVariable ? HEADINGS[k].variable : `${HEADINGS[k].scaling}${unit}`
      }
    }
  }
}

export const applyTypographySequence = () => {
  generateSequence(defaultProps)
  applyHeadings(defaultProps)
  applyVars(defaultProps)
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
