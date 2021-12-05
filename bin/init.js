'use strict'

import { exec } from "child_process"

program
.command('init [destination]')
.description('Initialize a repository')
.option('-m, --mode', 'Which Symbols to install (domql, react)')
.action(async (mode) => {
  const packageName = `@symbo.ls/${mode || 'uikit'}`
  console.log('Adding', chalk.green.bold(packageName))

  exec(`yarn add ${packageName} --force`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.warn(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(chalk.green.bold(packageName), 'successfuly added!')
    console.log('')
    console.log(chalk.dim.underline('Now you can import components like:'), `import { Button } from "${chalk.green.bold(packageName)}""`)
  })
})