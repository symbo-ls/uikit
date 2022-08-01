'use strict'

import {
  set,
  FONT,
  RESET,
  getFontFace
} from '@symbo.ls/scratch'
import CONFIG_DEFAULT from '@symbo.ls/config-default'
import SYMBOLSRC_FILE from './.symbolsrc.json'

import { injectGlobal } from '@emotion/css'

export const init = (config) => {
  const defaultConfig = config || CONFIG_DEFAULT || SYMBOLSRC_FILE

  const Scratch = set({ verbose: false, ...defaultConfig })
  console.log(Scratch)

  const FontFace = getFontFace(FONT)

  injectGlobal(FontFace)
  injectGlobal(RESET)
}
