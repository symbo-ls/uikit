'use strict'

import DOM from 'domql'

import system from './init'

import { Box } from 'smbls'
import { Extend } from './extend'

export const SymbolsDebugger = DOM.create(Extend, undefined, 'app', {
  extend: [Box],
  components: {},
  context: { system }
})
