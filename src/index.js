'use strict'

import {
  set,
  getActiveConfig,
  getFontFaceString
} from '@symbo.ls/scratch'

import { isObject, deepMerge } from '@domql/utils'
import { initDOMQLEmotion } from 'domql/packages/emotion'

import { emotion } from '@symbo.ls/create-emotion'
// import { setClassname } from 'css-in-props'

import DYNAMIC_JSON from './dynamic.json'

const CONFIG = getActiveConfig()

const prepareInit = (config = {}, RC_FILE) => {
  const rcfile = isObject(RC_FILE) ? RC_FILE : DYNAMIC_JSON || {}
  return deepMerge(config, rcfile)
}

const SET_OPTIONS = {
  emotion,
  useVariable: true,
  useReset: true,
  initDOMQLDefine: true
}

export const init = (config, RC_FILE, options = SET_OPTIONS) => {
  if (options.initDOMQLDefine) initDOMQLEmotion(options.emotion, options)

  const resultConfig = prepareInit(config, RC_FILE)

  const conf = set({
    verbose: false,
    useReset: options.useReset,
    ...resultConfig
  }, { newConfig: options.newConfig })

  const FontFace = getFontFaceString(conf.FONT)

  options.emotion.injectGlobal(FontFace)
  if (options.useReset) options.emotion.injectGlobal(conf.RESET)

  return conf
}

export const updateReset = (options = { emotion }) => {
  const CONFIG = getActiveConfig()
  options.emotion.injectGlobal(CONFIG.RESET)
}

export const setClass = (props, options = { emotion }) => {}// setClassname(props, options.emotion.css)

export { CONFIG }
