'use strict'

import { exec } from 'child_process'
import chalk from 'chalk'
import { program } from './program.js'

program
  .command('init [name]')
  .description('Initialize a repository')
  .option('--framework', 'Which Symbols to install (domql, react)')
  .action(async (framework) => {
    const packageName = `@symbo.ls/${framework || 'uikit'}`
    console.log('Creating', chalk.green.bold(packageName))

    // exec(`git clone git@github.com:symbo-ls/starter-kit.git`, (error, stdout, stderr) => {
    //   if (error) {
    //     console.log(`error: ${error.message}`)
    //     return
    //   }
    //   if (stderr) {
    //     console.warn(`stderr: ${stderr}`)
    //     return
    //   }
    //   console.log(`stdout: ${stdout}`)
    //   console.log(chalk.green.bold(packageName), 'successfuly added!')
    //   console.log('')
    //   console.log(chalk.dim.underline('Now you can import components like:'), `import { Button } from "${chalk.green.bold(packageName)}""`)
    // })
  })
