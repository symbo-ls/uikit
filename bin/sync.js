#!/usr/bin/env node

import { sync } from '@symbo.ls/socket'
import { program } from './program.js'
import { loadModule } from './require.js'

const RC_PATH = process.cwd() + '/.symbolsrc.json'
let rc = {}
try {
  rc = loadModule(RC_PATH) // eslint-disable-line
} catch (e) { console.error('Please include .symbolsrc.json to your root of respository') }

program
  .command('sync')
  .description('Sync with Symbols')
  .option('-l, --live', 'Bypass the local build')
  .action(async (options) => {
    rc.then(data => {
      const opts = { ...data, ...options }
      sync(null, opts)
    })
  })
