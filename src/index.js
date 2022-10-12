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

import createEmotion from '@symbo.ls/create-emotion'
import { setClassname } from 'css-in-props'

const { css, injectGlobal } = createEmotion

export const init = (config, RC_FILE, options = { emotion: createEmotion }) => {
  const defaultConfig = config || CONFIG_DEFAULT || SYMBOLSRC_FILE

  const rcfile = isObject(RC_FILE) ? RC_FILE : DYNAMIC_JSON
  const resultConfig = deepMerge(rcfile, defaultConfig)

  const conf = set({ verbose: false, ...resultConfig })
  const FontFace = getFontFaceString(FONT)

  injectGlobal(FontFace)
  if (conf.useReset) injectGlobal(RESET)

  return conf
}

export const updateReset = () => injectGlobal(RESET)

export const setClass = props => setClassname(props, css)

export { CONFIG }
