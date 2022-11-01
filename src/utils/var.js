'use strict'

import { getActiveConfig } from '../factory'
import { isObjectLike } from '@domql/utils'

const ENV = process.env.NODE_ENV // eslint-disable-line

export const setVariables = (result, key) => {
  const CONFIG = getActiveConfig()
  const { CSS_VARS } = CONFIG
  if (isObjectLike(result.value)) {
    // for (const key in result.value) {
    // }
  } else {
    CSS_VARS[result.var] = result.value
  }
}

export const applySequenceVars = (props, mediaName, options = {}) => {
  const CONFIG = getActiveConfig()
  const { UNIT, MEDIA, TIMING, CSS_VARS } = CONFIG

  const unit = props.unit || UNIT.default
  const { sequence, scales } = props

  for (const key in sequence) {
    const item = sequence[key]
    const value = (props.type === TIMING.type ? sequence[key].val : scales[key]) + unit

    if (mediaName) {
      const query = MEDIA[mediaName]
      if (!query) {
        if (CONFIG.verbose) console.warn('Can\'t find query ', query)
      }
      let underMediaQuery = CSS_VARS[`@media ${query}`]
      if (!underMediaQuery) underMediaQuery = CSS_VARS[`@media ${query}`] = {}
      underMediaQuery[item.variable] = `var(${item.variable + '-' + mediaName})`
      CSS_VARS[item.variable + '-' + mediaName] = value
    } else {
      if (options.useDefault === false) {
        CSS_VARS[item.variable] = value
      } else {
        CSS_VARS[item.variable + '-default'] = value
        CSS_VARS[item.variable] = `var(${item.variable + '-default'})`
      }
    }
  }
}
