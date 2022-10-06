console.log('Server Start')

const path = require('path')
const express = require('express')
const app = express()

const SocketIO = require('socket.io')
const { emit } = require('process')

// Settings
app.set('port', process.env.PORT || 3000)

// Static Files
const publicFolderPath = path.join(__dirname, 'public')
app.use(express.static(publicFolderPath)) // Serve static files (e.g. CSS files)

// Start Server
const server = app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})

const io = SocketIO(server)

// Websockets
io.on('connection', (socket) => {
  console.log('New Connection')
  socket.on('chat:message', (data) => {
    io.sockets.emit('chat:message', data)
  })

  socket.on('chat:typing', (data) => {
    socket.broadcast.emit('chat:typing', data)
  })
})

// app.get('/', () => {})
