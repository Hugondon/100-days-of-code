const path = require('path')

const express = require('express')

const db = require('./data/database')
const authRoutes = require('./routes/auth.routes')

const app = express()

// Views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Public files
app.use(express.static('public'))

// Routes
app.use(authRoutes)

db.connectToDatabase()
  .then(function () {
    // Port
    app.listen(3000)
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!')
    console.log(error)
  })
