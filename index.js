'use strict'

import {
  set,
  FONT,
  RESET,
  getFontFaceString
} from '@symbo.ls/scratch'
import CONFIG_DEFAULT from '@symbo.ls/config-default'
import SYMBOLSRC_FILE from './.symbolsrc.json'

import createEmotion from '@emotion/css/create-instance'
import { setClassname } from 'css-in-props'

const { css, injectGlobal } = createEmotion({
  key: 'smbls'
})

export * from 'css-in-props'

export const init = (config) => {
  const defaultConfig = config || CONFIG_DEFAULT || SYMBOLSRC_FILE

  set({ verbose: false, ...defaultConfig })

  const FontFace = getFontFaceString(FONT)

  injectGlobal(FontFace)
  injectGlobal(RESET)
}

export const setClass = props => setClassname(props, css)
