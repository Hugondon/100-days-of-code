const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')
const app = express()

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(htmlFilePath)
})
app.get('/confirm', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'confirm.html')
  res.sendFile(htmlFilePath)
})
app.get('/index', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'index.html')
  res.sendFile(htmlFilePath)
})
app.get('/recommend', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'recommend.html')
  res.sendFile(htmlFilePath)
})
app.post('/recommend', function (req, res) {
  // Parse Data
  const restaurant = req.body
  const filePath = path.join(__dirname, 'data', 'restaurants.json')

  const fileData = fs.readFileSync(filePath)
  // Text To JS Array
  const storedRestaurants = JSON.parse(fileData)
  storedRestaurants.push(restaurant)

  // Write JS Array as text :)
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants))

  // Path to Redirect
  res.redirect('/confirm')
})

app.get('/restaurants', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html')
  res.sendFile(htmlFilePath)
})

app.listen(3000)
