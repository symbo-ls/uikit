'use strict'

import { MEDIA, TYPOGRAPHY } from '../config'
import { CONFIG } from '../factory'
import {
  applySequenceVars,
  findHeadings,
  generateSequence,
  getSequenceValue,
  merge
} from '../utils'

export const runThroughMedia = props => {
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
      TYPOGRAPHY.styles[`@media screen and ${query}`] = {
        fontSize: mediaProps.base / TYPOGRAPHY.browserDefault + unit
      }
    }
  }
}

export const applyHeadings = (props) => {
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
  generateSequence(TYPOGRAPHY)
  applyHeadings(TYPOGRAPHY)
  applySequenceVars(TYPOGRAPHY)
  runThroughMedia(TYPOGRAPHY)
}

export const getFontSizeByKey = val => getSequenceValue({
  type: TYPOGRAPHY.sequence,
  prop: 'fontSize',
  val,
  unit: TYPOGRAPHY.unit,
  prefix: '--font-size-'
})
