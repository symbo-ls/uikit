import io from 'socket.io-client'

const socket = io('ws://localhost:3000')

export const send = changes => {
  console.log(changes)
  socket.emit('change', changes)
}

export const receive = changes => {
  console.log(changes)
  socket.emit('change', changes)
}

socket.on('connect', () => {
  console.log(`event: connect | session id: ${socket.id}`)
})

socket.on('connect_error', (err) => {
  console.log(`event: connect_error | reason: ${err.message}`)
})

socket.on('disconnect', (reason) => {
  console.log(`event: disconnect | reason: ${reason}`)
})

socket.onAny((event, ...args) => {
  console.log(`event: ${event} | arguments: ${args}`)

  receive(event, args)
})
