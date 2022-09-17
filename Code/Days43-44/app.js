const path = require('path')

// Create ExpressJS Server
const express = require('express')

const defaultRoutes = require('./routes/default')
const restaurantRoutes = require('./routes/restaurants')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use('/', defaultRoutes)
app.use('/', restaurantRoutes)

// Request that handles anything that's not handled previously
app.use(function (req, res) {
  res.status(404).render('404')
})

// Only execute if an error occurred in your website (default error)
app.use(function (error, req, res, next) {
  res.status(500).render('500')
})
app.listen(3000)
