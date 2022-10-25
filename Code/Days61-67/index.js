const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')
const app = express()

// Activate EJS view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Server Static Files
app.use(express.urlencoded({ extended: true })) // Parse incoming request bodies
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)
