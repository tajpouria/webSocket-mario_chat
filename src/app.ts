import express, { Application } from 'express'
import socket from 'socket.io'

const app: Application = express()

const { PORT = 4000, NODE_ENV = 'development' }: { PORT?: number, NODE_ENV?: string } = process.env

app.use(express.static('src/public'))

const server = app.listen(PORT, (): void => {
  console.log(
    `Listening on Port ${PORT}...`
  )
})

const io = socket(server, { origins: '*:*' })

io.on('connection', (socket) => {
  socket.on('chat', (data: { message: string, handle: string }) => {
    io.sockets.emit('chat', data)
  })

  socket.on('typing', (data: string) => {
    socket.broadcast.emit('typing', data)
  })
})