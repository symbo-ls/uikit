#!/usr/bin/env node

const fs = require('fs')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const { dirname } = require('path')

const symbolsInitFile = '@symbo.ls/init/src/dynamic.json'
// const symbolsInitFile = './.symbols.json'

const merge = require('merge-deep')
let DYNAMIC = require(symbolsInitFile)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:1200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
})

app.get('/', (req, res) => {
  res.end('open')
})

const dir = dirname(require.main.filename)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('change', change => {
    const newMerge = DYNAMIC = merge(DYNAMIC, change)
    const mergeStr = JSON.stringify(newMerge, null, 2)
    const inInit = dir + '/node_modules/' + symbolsInitFile // eslint-disable-line
    const inRC = dir + '/.symbols.json' // eslint-disable-line
    fs.writeFile(inInit, mergeStr, function (err) {
      if (err) { return console.log(err) }
    })
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
