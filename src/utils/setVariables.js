'use strict'

import { CSS_VARS } from '../factory'
import { isObjectLike } from './object'

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
