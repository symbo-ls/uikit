#!/usr/bin/env node

import fs from 'fs'
import fetch from 'node-fetch'
import chalk from 'chalk'
import { loadModule } from './require.js'
import { exec } from 'child_process'
import { program } from './program.js'

const PACKAGE_PATH = process.cwd() + '/package.json'
const RC_PATH = process.cwd() + '/.symbolsrc.json'
const LOCAL_CONFIG_PATH = process.cwd() + '/node_modules/@symbo.ls/init/src/dynamic.json'
const DEFAULT_REMOTE_REPOSITORY = 'https://github.com/symbo-ls/config-default/'
const DEFAULT_REMOTE_CONFIG_PATH = 'https://raw.githubusercontent.com/symbo-ls/config-default/main/src/config.json'

const API_URL = 'https://api.symbols.app/' // eslint-disable-line

const pkg = loadModule(PACKAGE_PATH)
const rc_file = loadModule(RC_PATH) // eslint-disable-line
const local_config = loadModule(LOCAL_CONFIG_PATH) // eslint-disable-line

program
  .version(pkg.version)

program
  .command('install')
  .description('Install Symbols')
  .option('--framework', 'Which Symbols to install (domql, react)')
  .action(async (framework) => {
    // const packageName = `@symbo.ls/${mode || 'uikit'}`
    const packageName = 'smbls'
    console.log('Adding', chalk.green.bold(packageName))

    if (framework === 'domql' || rc_file.framework === 'domql') {
      exec('yarn add domql@^1.15.26 --force', (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`)
          return
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`)
          // return;
        }
      })
    }

    exec(`yarn add ${packageName}@^0.15.22 --force`, (error, stdout, stderr) => {
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
    const response = await fetch(DEFAULT_REMOTE_CONFIG_PATH)
    const body = await response.json()
    const { version, ...config } = body

    console.log(chalk.dim('- Default config from:'), chalk.dim.underline(DEFAULT_REMOTE_REPOSITORY))
    console.log('')
    console.log(chalk.bold('Symbols'), 'config fetched:', chalk.green(version))

    console.log(chalk.dim('- .symbolsrc.json created:'), chalk.dim.underline(LOCAL_CONFIG_PATH))
    console.log('')

    const bodyString = JSON.stringify(body)
    fs.writeFile(LOCAL_CONFIG_PATH, bodyString, err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    })

    for (const t in config) {
      const type = config[t]
      console.log(chalk.bold(t))
      for (const v in type) console.log('  ', chalk.dim(v))
      console.log(Object.keys(type))
    }
  })
