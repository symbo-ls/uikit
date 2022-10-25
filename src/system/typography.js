'use strict'

import { getActiveConfig } from '../factory'

import {
  applySequenceVars,
  findHeadings,
  generateSequence,
  getSequenceValuePropertyPair,
  merge
} from '../utils'

export const runThroughMedia = props => {
  const CONFIG = getActiveConfig()
  const { TYPOGRAPHY, MEDIA } = CONFIG

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
  const CONFIG = getActiveConfig()
  if (props.h1Matches) {
    const unit = props.unit
    const HEADINGS = findHeadings(props)
    const { styles } = props
    for (const k in HEADINGS) {
      const headerName = `h${parseInt(k) + 1}`
      const headerStyle = styles[headerName]
      styles[headerName] = {
        fontSize: CONFIG.useVariable ? `var(${HEADINGS[k].variable})` : `${HEADINGS[k].scaling}${unit}`,
        margin: headerStyle ? headerStyle.margin : 0,
        lineHeight: headerStyle ? headerStyle.lineHeight : props.lineHeight,
        letterSpacing: headerStyle ? headerStyle.letterSpacing : props.letterSpacing,
        fontWeight: headerStyle ? headerStyle.fontWeight : 900 - (k * 100)
      }
    }
  }
}

export const applyTypographySequence = () => {
  const CONFIG = getActiveConfig()
  const { TYPOGRAPHY } = CONFIG

  generateSequence(TYPOGRAPHY)
  applyHeadings(TYPOGRAPHY)
  applySequenceVars(TYPOGRAPHY)
  runThroughMedia(TYPOGRAPHY)
}

export const getFontSizeByKey = value => {
  const CONFIG = getActiveConfig()
  const { TYPOGRAPHY } = CONFIG
  return getSequenceValuePropertyPair(
    value,
    'fontSize',
    TYPOGRAPHY
  )
}
