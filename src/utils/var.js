'use strict'

import { MEDIA, TIMING } from '../defaultConfig'
import { CONFIG, CSS_VARS } from '../factory'
import { isObjectLike } from './object'

const ENV = process.env.NODE_ENV

export const setVariables = (result, key) => {
  // CSS_VARS[result.var] =
  if (isObjectLike(result.value)) {
    // console.group(key)
    // for (const key in result.value) {
    // console.log(key, result.value[key])
    // }
    // console.log(result)
    // console.groupEnd(key)
  } else {
    CSS_VARS[result.var] = result.value
  }
}

export const applySequenceVars = (props, mediaName, options = {}) => {
  const unit = props.unit || CONFIG.UNIT.default
  const { sequence, scales } = props

  for (const key in sequence) {
    const item = sequence[key]
    const value = (props.type === TIMING.type ? sequence[key].val : scales[key]) + unit

    if (mediaName) {
      const query = MEDIA[mediaName]
      if (!query) {
        if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose) console.warn('Can\'t find query ', query)
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
