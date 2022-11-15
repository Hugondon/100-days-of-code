const path = require('path')

const express = require('express')
const csrf = require('csurf')
const expressSession = require('express-session')

const createSessionConfig = require('./config/session')
const db = require('./data/database')
const addCsrfTokenMiddleware = require('./middlewares/crsf-token')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const checkAuthStatusMiddleware = require('./middlewares/check-auth')
const authRoutes = require('./routes/auth.routes')
const productsRoutes = require('./routes/products.routes')
const baseRoutes = require('./routes/base.routes')

const app = express()

// Views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Public files
app.use(express.static('public'))

// Extract request information
app.use(express.urlencoded({ extended: false }))

// Sessions
const sessionConfig = createSessionConfig()
app.use(expressSession(sessionConfig))

// Chec Authentication after request
app.use(checkAuthStatusMiddleware)

// CSRF
app.use(csrf())
app.use(addCsrfTokenMiddleware)

// Routes
app.use(baseRoutes)
app.use(authRoutes)
app.use(productsRoutes)

// Error handling
app.use(errorHandlerMiddleware)

db.connectToDatabase()
  .then(function () {
    // Port
    app.listen(3000)
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!')
    console.log(error)
  })
