const express = require('express')

const app = express()

function handleCurrenttimeRequest(req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>')
}
function handleRequest(req, res) {
  res.send('<h1>Hello World!</h1>')
}

app.get('/currenttime', handleCurrenttimeRequest)
app.get('/', handleRequest)

app.listen(3000)
