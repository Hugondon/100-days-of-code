const path = require('path')

const express = require('express')
const session = require('express-session')
const mongodbStore = require('connect-mongodb-session')

const db = require('./data/database')
const demoRoutes = require('./routes/demo')

const MongoDBStore = mongodbStore(session)

const app = express()

const sessionStore = new MongoDBStore({
  uri: 'mongodb://127.0.0.1:27017',
  databaseName: 'auth-demo',
  collection: 'sessions',
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: 'session-secret',
    resave: false, // Session updated in the database if the data in it changed
    saveUninitialized: false, // Session stored once there is some data in it
    store: sessionStore, // Can be stored in memory
  }),
)

app.use(demoRoutes)

app.use(function (error, req, res, next) {
  res.render('500')
})

db.connectToDatabase().then(function () {
  app.listen(3000)
})
