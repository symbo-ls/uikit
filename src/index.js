'use strict'

import {
  set,
  getActiveConfig,
  getFontFaceString
} from '@symbo.ls/scratch'

import { isObject, deepMerge } from '@domql/utils'
import { initDOMQLEmotion } from 'domql/packages/emotion'

import { emotion } from '@symbo.ls/create-emotion'
import { setClassname } from 'css-in-props'

import DYNAMIC_JSON from './dynamic.json'

const CONFIG = getActiveConfig()

const prepareInit = (config = {}, RC_FILE) => {
  // const defaultConfig = merge(config, CONFIG_DEFAULT)
  const rcfile = isObject(RC_FILE) ? RC_FILE : DYNAMIC_JSON || {}
  return deepMerge(config, rcfile)
}

export const init = (config, RC_FILE, options = { emotion, initDOMQLDefine: true }) => {
  if (options.initDOMQLDefine) initDOMQLEmotion(options.emotion, options)

  const resultConfig = prepareInit(config)

  const conf = set({ verbose: false, ...resultConfig }, { newConfig: options.newConfig })
  const FontFace = getFontFaceString(conf.FONT)

  options.emotion.injectGlobal(FontFace)
  if (conf.useReset) options.emotion.injectGlobal(conf.RESET)

  return conf
}

export const updateReset = (options = { emotion }) => {
  const CONFIG = getActiveConfig()
  options.emotion.injectGlobal(CONFIG.RESET)
}

export const setClass = (props, options = { emotion }) => setClassname(props, options.emotion.css)

export { CONFIG }
