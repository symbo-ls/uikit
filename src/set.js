'use strict'

import { applyDocument, applySpacingSequence, applyTimingSequence, applyTypographySequence } from './config'
import { CONFIG, CSS_VARS } from './factory'
import { applyReset } from './reset'
import { setColor, setGradient, setFont, setFontFamily, setTheme } from './system'
import {
  setVariables,
  isFunction
} from './utils'

const ENV = process.env.NODE_ENV

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
  reset: setSameValue
}

/**
 *
 * @param {Object} FACTORY_NAME Defines which factory it goes to
 * @param {*} value Value of the property
 * @param {String} key Key, or the name of the property
 * @returns {Object} Factory
 */
export const setValue = (FACTORY_NAME, value, key) => {
  const factoryName = FACTORY_NAME.toLowerCase()
  const FACTORY = CONFIG[FACTORY_NAME]
  const result = SETTERS[factoryName](value, key)

  // console.log(CONFIG.verbose)
  if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose && FACTORY[key]) {
    // console.warn('Replacing ', key, ' as ', FACTORY[key], ' in ', factoryName)
  }

  FACTORY[key] = result
  setVariables(result, key)

  return FACTORY
}

export const setEach = (factoryName, props) => {
  const FACTORY_NAME = factoryName.toUpperCase()
  const keys = Object.keys(props)
  keys.map(key => setValue(FACTORY_NAME, props[key], key))

  return CONFIG[FACTORY_NAME]
}

export const set = recivedConfig => {
  const { version, verbose, useVariable, useReset, ...config } = recivedConfig

  if (verbose !== undefined) CONFIG.verbose = verbose
  if (useVariable !== undefined) CONFIG.useVariable = useVariable
  if (useReset !== undefined) CONFIG.useReset = useReset
  if ((ENV === 'test' || ENV === 'development') && CONFIG.verbose) console.log(CONFIG)

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
