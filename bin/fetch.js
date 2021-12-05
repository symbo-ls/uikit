#!/usr/bin/env node

import 'v8-compile-cache'
import fs from 'fs'
import fetch from 'node-fetch'
import chalk from 'chalk'
import { loadModule } from './require.js'
import { Command } from 'commander'

const pkg = loadModule('../package.json')
const program = new Command()

const API_URL = 'https://api.symbols.app/' // eslint-disable-line
const DEFAULT_CONFIG = 'https://raw.githubusercontent.com/symbo-ls/uikit/feature/monorepo/packages/config-default/src/config.json'
const LOG_DEST = 'https://raw.githubusercontent.com/symbo-ls/uikit/packages/config-default/src/config.json'

program
  .version(pkg.version)

program
  .command('fetch [destination]')
  .description('Fetch symbols')
  .action(async (source, destination) => {
    const response = await fetch(DEFAULT_CONFIG)
    const body = await response.json()
    const { version, ...config } = body

    console.log('')
    console.log(chalk.bold('Symbols'), 'config fetched:', chalk.green(version))
    console.log(chalk.dim('- Default config from:'), chalk.dim.underline(LOG_DEST))

    const path = process.cwd() + '/.symbolsrc.json'
    console.log(chalk.dim('- .symbolsrc.json created:'), chalk.dim.underline(path))
    console.log('')

    fs.writeFile(path, JSON.stringify(body), err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    })

    for (const t in config) {
      const type = config[t]
      console.log(chalk.bold(t))
      // for (const v in type) console.log('  ', chalk.dim(v))
      console.log(Object.keys(type))
    }
  })

var args = process.argv
program.parse(args)
