console.log('Client-side code')
const socket = io()

// DOM elements
let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

btn.addEventListener('click', function () {
  let dataObject = {
    username: username.value,
    message: message.value,
  }
  socket.emit('chat:message', dataObject)
  //   console.log(username.value, message.value)
})

message.addEventListener('keypress', function () {
  socket.emit('chat:typing', username.value)
})

socket.on('chat:message', function (data) {
  //   console.log(data)
  actions.innerHTML = ''
  output.innerHTML += `<p>
      <strong>${data.username}</strong>: ${data.message} </p>`
})
socket.on('chat:typing', function (data) {
  actions.innerHTML = `<p>
      <em>${data} is typing...</em></p>`
})
