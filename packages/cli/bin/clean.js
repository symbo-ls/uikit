#!/usr/bin/env node

import { sync } from '@symbo.ls/socket'
import { program } from './program.js'

program
  .command('clean')
  .description('Clean Symbols temp files')
  .action(async () => {
    sync()
  })
