'use strict'

import {
  set,
  FONT,
  RESET,
  getFontFaceString,
  CONFIG
} from '@symbo.ls/scratch'

import { deepMerge, isObject } from '@domql/utils'

import CONFIG_DEFAULT from '@symbo.ls/config-default'
import SYMBOLSRC_FILE from '../.symbolsrc.json'

import DYNAMIC_JSON from './dynamic.json'

import createEmotion from '@emotion/css/create-instance'
import { setClassname } from 'css-in-props'

const { css, injectGlobal } = createEmotion({
  key: 'smbls'
})

export const init = (config, rcfile) => {
  const defaultConfig = config || CONFIG_DEFAULT || SYMBOLSRC_FILE

  const RC_FILE = isObject(rcfile) ? rcfile : DYNAMIC_JSON
  const resultConfig = deepMerge(RC_FILE, defaultConfig)

  const conf = set({ verbose: false, ...resultConfig })
  const FontFace = getFontFaceString(FONT)

  injectGlobal(FontFace)
  if (conf.useReset) injectGlobal(RESET)

  return conf
}

export const updateReset = () => injectGlobal(RESET)

export const setClass = props => setClassname(props, css)

export { CONFIG }
