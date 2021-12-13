'use strict'

import '@domql/emotion'
import { set } from '@symbo.ls/scratch'

import CONFIG_DEFAULT from '@symbo.ls/config-default'
import SYMBOLSRC_FILE from './.symbolsrc.json'

const activeConfig = SYMBOLSRC_FILE || CONFIG_DEFAULT
set(activeConfig)

export default CONFIG_DEFAULT

export * from '@symbo.ls/scratch'
