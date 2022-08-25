'use strict'

import * as CONF from './config'

export const CSS_VARS = {}
export const CONFIG = {
  verbose: false,
  useVariable: true,
  useReset: true,
  VARS: CSS_VARS,
  ...CONF
}
