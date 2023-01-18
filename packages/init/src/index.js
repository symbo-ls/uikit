'use strict'

import {
  set,
  getActiveConfig,
  getFontFaceString
} from '@symbo.ls/scratch'

import { isObject, deepMerge } from '@domql/utils'
import { initDOMQLEmotion } from 'domql/packages/emotion'

import { emotion as defaultEmotion } from '@symbo.ls/create-emotion'
// import { setClassname } from 'css-in-props'

import DYNAMIC_JSON from './dynamic.json'

const CONFIG = getActiveConfig()

const prepareInit = (config = CONFIG, RC_FILE) => {
  const rcfile = isObject(RC_FILE) ? RC_FILE : DYNAMIC_JSON || {}
  return deepMerge(config, rcfile)
}

const SET_OPTIONS = {
  emotion: defaultEmotion,
  useVariable: true,
  useReset: true,
  initDOMQLDefine: true
}

export const init = (config, RC_FILE, options = SET_OPTIONS) => {
  if (options.initDOMQLDefine) initDOMQLEmotion(options.emotion, options)

  const resultConfig = prepareInit(config, RC_FILE)
  const emotion = options.emotion || defaultEmotion

  const conf = set({
    verbose: false,
    useReset: options.useReset,
    ...resultConfig
  }, { newConfig: options.newConfig })

  const FontFace = getFontFaceString(conf.FONT)

  emotion.injectGlobal(FontFace)
  if (options.useVariable) emotion.injectGlobal({ ':root': conf.CSS_VARS })
  if (options.useReset) emotion.injectGlobal(conf.RESET)

  return conf
}

export const updateReset = (config, RC_FILE, options = { emotion: defaultEmotion }) => {
  const resultConfig = prepareInit(config, RC_FILE)
  // console.log(resultConfig)
  const conf = set({
    verbose: false,
    ...resultConfig
  })
  console.log(conf.CSS_VARS)
  options.emotion.injectGlobal({ ':root': conf.CSS_VARS })
  options.emotion.injectGlobal(conf.RESET)
}

export const setClass = (props, options = { emotion: defaultEmotion }) => {}// setClassname(props, options.emotion.css)

export { CONFIG }
