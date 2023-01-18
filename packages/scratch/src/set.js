'use strict'

import { FACTORY, getActiveConfig } from './factory' // eslint-disable-line no-unused-vars
import {
  setColor,
  setGradient,
  setFont,
  setFontFamily,
  setTheme,
  applyTypographySequence,
  applySpacingSequence,
  applyReset,
  applyTimingSequence,
  applyDocument
} from './system'

import { isFunction } from './utils'

const ENV = process.env.NODE_ENV // eslint-disable-line no-unused-vars

const setCases = (val, key) => {
  if (isFunction(val)) return val()
  return val
}

const setSameValue = (val, key) => val

export const SETTERS = {
  color: setColor,
  gradient: setGradient,
  font: setFont,
  font_family: setFontFamily,
  theme: setTheme,
  typography: setSameValue,
  cases: setCases,
  spacing: setSameValue,
  media: setSameValue,
  timing: setSameValue,
  icons: setSameValue,
  reset: setSameValue,
  unit: setSameValue,
  animation: setSameValue
}

/**
 *
 * @param {Object} FACTORY_NAME Defines which factory it goes to
 * @param {*} value Value of the property
 * @param {String} key Key, or the name of the property
 * @returns {Object} Factory
 */
export const setValue = (FACTORY_NAME, value, key) => {
  const CONFIG = getActiveConfig()
  const factoryName = FACTORY_NAME.toLowerCase()
  const FACTORY = CONFIG[FACTORY_NAME]

  if (SETTERS[factoryName]) {
    const result = SETTERS[factoryName](value, key)
    FACTORY[key] = result
    return FACTORY
  }
  if (CONFIG.verbose) console.warn('Can not find', factoryName, 'method in scratch')
}

export const setEach = (factoryName, props) => {
  const CONFIG = getActiveConfig()
  const FACTORY_NAME = factoryName.toUpperCase()
  const keys = Object.keys(props)
  keys.map(key => setValue(FACTORY_NAME, props[key], key))

  return CONFIG[FACTORY_NAME]
}

const SET_OPTIONS = {}

export const set = (recivedConfig, options = SET_OPTIONS) => {
  let CONFIG = getActiveConfig()
  const { version, verbose, useVariable, useReset, globalTheme, ...config } = recivedConfig

  if (options.newConfig) {
    FACTORY['active'] = options.newConfig
    CONFIG = getActiveConfig(options.newConfig)
  }

  if (verbose !== undefined) CONFIG.verbose = verbose
  if (useVariable !== undefined) CONFIG.useVariable = useVariable
  if (useReset !== undefined) CONFIG.useReset = useReset
  if (globalTheme !== undefined) CONFIG.globalTheme = globalTheme
  if (CONFIG.verbose) console.log(CONFIG)

  const keys = Object.keys(config)
  keys.map(key => setEach(key, config[key]))

  // apply generic configs
  applyTypographySequence()
  applySpacingSequence()
  applyTimingSequence()
  applyDocument()
  applyReset()

  return CONFIG
}

export * from './system'
