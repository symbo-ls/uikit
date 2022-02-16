'use strict'

import '@domql/emotion'
import { set, RESET } from '@symbo.ls/scratch'

import { injectGlobal } from 'emotion'

import CONFIG_DEFAULT from '@symbo.ls/config-default'
import SYMBOLSRC_FILE from './.symbolsrc.json'

injectGlobal(RESET)

const activeConfig = SYMBOLSRC_FILE || CONFIG_DEFAULT
set(activeConfig)

export default CONFIG_DEFAULT

export * from '@symbo.ls/scratch'
