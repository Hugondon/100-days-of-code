const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')
const { Console } = require('console')
const app = express()

// Activate EJS view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Server Static Files
app.use(express.urlencoded({ extended: true })) // Parse incoming request bodies
app.use(express.static('public'))

app.get('/', function (req, res) {
  const filePath = path.join(__dirname, 'public', 'data', 'profiles.json')

  try {
    const fileData = fs.readFileSync(filePath)
    const existingProfiles = JSON.parse(fileData)

    if (existingProfiles.length === 0) {
      res.render('index', {
        existingProfiles: [],
      })
    } else {
      res.render('index', {
        existingProfiles: existingProfiles,
      })
    }
  } catch (error) {
    console.log(error)
    const existingProfiles = []

    res.render('index', {
      existingProfiles: existingProfiles,
    })
  }
})

app.post('/save-profile', async function (req, res) {
  const filePath = path.join(__dirname, 'public', 'data', 'profiles.json')
  const profileInformation = req.body

  const fileData = fs.readFileSync(filePath)
  const existingProfiles = JSON.parse(fileData)
  existingProfiles.push(profileInformation)
  fs.writeFileSync(filePath, JSON.stringify(existingProfiles))
  res.render('index', {
    existingProfiles: existingProfiles,
  })
})

app.get('/load-profile', async function (req, res) {
  const filePath = path.join(__dirname, 'public', 'data', 'profiles.json')
})

app.listen(3000)
