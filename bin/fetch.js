#!/usr/bin/env node

import fs from 'fs'
import fetch from 'node-fetch'
import chalk from 'chalk'
import { loadModule } from './require.js'
import { Command } from 'commander'
import { exec } from 'child_process'

const pkg = loadModule('../package.json')
const program = new Command()

const API_URL = 'https://api.symbols.app/' // eslint-disable-line
const DEFAULT_CONFIG = 'https://raw.githubusercontent.com/symbo-ls/uikit/feature/monorepo/packages/config-default/src/config.json'
const LOG_DEST = 'https://raw.githubusercontent.com/symbo-ls/uikit/packages/config-default/src/config.json'

program
  .version(pkg.version)

program
  .command('init [destination]')
  .description('Initialize a repository')
  .option('-m, --mode', 'Which Symbols to install (domql, react)')
  .action(async (mode) => {
    const packageName = `@symbo.ls/${mode || 'uikit'}`
    console.log('Adding', chalk.green.bold(packageName))

    exec(`yarn add ${packageName} --force`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        // return;
      }
      console.log('')
      console.log(`stdout: ${stdout}`)
      console.log('\n')
      console.log(chalk.green.bold(packageName), 'successfuly added!')
      console.log('')
      console.log(chalk.dim('Now you can import components like:'), `import { Button } from "${chalk.green.bold(packageName)}"`)
    })
  })
program
  .command('fetch [destination]')
  .description('Fetch symbols')
  .action(async (source, destination) => {
    const response = await fetch(DEFAULT_CONFIG)
    const body = await response.json()
    const { version, ...config } = body

    console.log(source, destination)

    console.log('')
    console.log(chalk.bold('Symbols'), 'config fetched:', chalk.green(version))
    console.log(chalk.dim('- Default config from:'), chalk.dim.underline(LOG_DEST))

    const path = process.cwd() + '/.symbolsrc.json'
    console.log(chalk.dim('- .symbolsrc.json created:'), chalk.dim.underline(path))
    console.log('')

    const bodyString = JSON.stringify(body)
    fs.writeFile(path, bodyString, err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        const initPath = process.cwd() + '/node_modules/@symbo.ls/scratch-init/.symbolsrc.json'
        fs.writeFile(initPath, bodyString, err => { if (err) throw err })
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

const args = process.argv
program.parse(args)
