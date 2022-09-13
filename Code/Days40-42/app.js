const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/confirm', function (req, res) {
  res.render('confirm')
})
app.get('/index', function (req, res) {
  res.render('index')
})
app.get('/recommend', function (req, res) {
  res.render('recommend')
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
  const filePath = path.join(__dirname, 'data', 'restaurants.json')

  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)
  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  })
})

app.listen(3000)
