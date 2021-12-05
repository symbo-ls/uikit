#!/usr/bin/env node

import 'v8-compile-cache'
import { createRequire } from 'module'
import { Command } from 'commander'
import fetch from 'node-fetch'
import chalk from 'chalk'
import fs from 'fs'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')
const program = new Command()

const API_URL = 'https://api.symbols.app/'
const DEFAULT_CONFIG = 'https://raw.githubusercontent.com/symbo-ls/uikit/8e7026a2216c68efad260961a77c9302d34c7aa4/packages/config-default/src/config.json'

program
  .version(pkg.version)

// program
//   .command('login [destination]')
//   .description('Sign in to Symbols')
//   .argument('<username>', 'user to login')
//   .argument('[password]', 'password for user, if required', 'no password given')
//   .action(async (username, password) => {
//     console.log('username:', username)
//     console.log('password:', password)

//     const response = await fetch(API_URL)
//     const body = await response.json()
//     console.log(body)
//   })

program
  .command('fetch [destination]')
  .description('Fetch symbols')
  .action(async (source, destination) => {
    const response = await fetch(DEFAULT_CONFIG)
    const body = await response.json()
    const { version, ...config } = body

    console.log('')
    console.log(chalk.bold('Symbols'), 'config received: ', chalk.green(version))

    const path = process.cwd() + '/.symbolsrc.json'
    console.log(chalk.dim('Default config fetched: '), chalk.dim.underline(path))
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
