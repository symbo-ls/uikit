'use strict'

const fs = require('fs')
const config = require('../dist').default

const jsonString = JSON.stringify(config)
fs.writeFile('./src/config.json', jsonString, err => {
  if (err) {
    console.log('Error writing file', err)
  } else {
    console.log('Successfully wrote file')
  }
})
