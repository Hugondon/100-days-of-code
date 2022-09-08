const http = require('http')
let userName = 'Hello World'
console.log(userName)

function handleRequest(request, response) {
  // localhost:3000/currenttime
  // localhost:3000/

  response.statusCode = 200
  if (request.url === '/currenttime') {
    response.end('<h1>' + new Date().toISOString() + '</h1>')
  } else if (request.url === '/') {
    response.end('<h1>Hello World!</h1>')
  }
}

const server = http.createServer(handleRequest)

// Port 3000
server.listen(3000)
