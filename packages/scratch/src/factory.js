'use strict'

import { deepClone, isDefined } from '@domql/utils'
import * as CONF from './defaultConfig'

export const CSS_VARS = {}
export const CONFIG = {
  verbose: false,
  useVariable: true,
  useReset: true,
  CSS_VARS,
  ...CONF
}

const cachedConfig = deepClone(CONFIG)

export const FACTORY = {
  active: '0',
  0: CONFIG
}

export const activateConfig = (def) => {
  if (isDefined(def)) { FACTORY.active = def }
  return FACTORY[def || FACTORY.active]
}

export const getActiveConfig = (def) => {
  if (isDefined(def) && !FACTORY[def]) {
    FACTORY[def] = deepClone(cachedConfig)
    return FACTORY[def]
  }
  return FACTORY[def || FACTORY.active]
}
