'use strict'

import '@domql/emotion'
import { set } from '@symbo.ls/scratch'

import CONFIG_DEFAULT from '@symbo.ls/config-default'
import { loadModule } from './require'
import * as PATH from 'path'
// import PGK from '~/.symbolsrc.json'

// const appDir = dirname(require.main.filename)
// require_isomorphic('foo')

// console.log(process.cwd())
// console.log(__dirname)
// console.log(PATH)
// console.log(import.meta)

// console.log(PATH.resolve('file://symbolsrc.json'))

// import SYMBOLSRC_FILE from '~/symbolsrc.json'

// const SYMBOLSRC_FILE = process.cwd() + '/.symbolsrc.json'
// console.log(PGK)

// const activeConfig = SYMBOLSRC_FILE || CONFIG_DEFAULT
const activeConfig = CONFIG_DEFAULT
console.log('Config received:')
console.log(activeConfig)
set(activeConfig)

export default CONFIG_DEFAULT

export * from '@symbo.ls/scratch'
