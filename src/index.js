'use strict'

import {
  set,
  RESET,
  getFontFaceString,
  CONFIG
} from '@symbo.ls/scratch'

import { isObject, deepMerge } from '@domql/utils'
import { initDOMQLEmotion } from 'domql/packages/emotion'

import { emotion } from '@symbo.ls/create-emotion'
import { setClassname } from 'css-in-props'

import DYNAMIC_JSON from './dynamic.json'

const prepareInit = (config = {}, RC_FILE) => {
  // const defaultConfig = merge(config, CONFIG_DEFAULT)
  const rcfile = isObject(RC_FILE) ? RC_FILE : DYNAMIC_JSON || {}
  return deepMerge(config, rcfile)
}

export const init = (config, RC_FILE, options = { emotion }) => {
  initDOMQLEmotion(options.emotion)

  const resultConfig = prepareInit(config)

  const conf = set({ verbose: false, ...resultConfig })
  const FontFace = getFontFaceString(conf.FONT)

  options.emotion.injectGlobal(FontFace)
  if (conf.useReset) options.emotion.injectGlobal(conf.RESET)

  return conf
}

export const updateReset = (options = { emotion }) => options.emotion.injectGlobal(RESET)

export const setClass = (props, options = { emotion }) => setClassname(props, options.emotion.css)

export { CONFIG }
