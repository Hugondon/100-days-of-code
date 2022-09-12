const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

// Handle income requests
app.use(express.urlencoded({ extended: false }))

function handleCurrenttimeRequest(req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>')
}
function handleRequest(req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>',
  )
}
function handlePostRequest(req, res) {
  const userName = req.body.username
  console.log(userName)

  const filePath = path.join(__dirname, 'data', 'users.json')

  const fileData = fs.readFileSync(filePath)
  const existingUsers = JSON.parse(fileData)

  existingUsers.push(userName)
  fs.writeFileSync(filePath, JSON.stringify(existingUsers))
  res.send('<h1>Username stored')
}

function getUsers(req, res) {
  const filePath = path.join(__dirname, 'data', 'users.json')

  const fileData = fs.readFileSync(filePath)
  const existingUsers = JSON.parse(fileData)

  let responseData = '<ul>'

  for (const user of existingUsers) {
    responseData += '<li>' + user + '</li>'
  }

  responseData += '</ul>'

  res.send(responseData)
}

app.get('/currenttime', handleCurrenttimeRequest)
app.get('/', handleRequest)

app.post('/store-user', handlePostRequest)

app.get('/users', getUsers)
app.listen(3000)
