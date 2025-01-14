const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')
const { Console } = require('console')
const app = express()

// Profile ids
const uuid = require('uuid')

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
    res.render('index', {
      existingProfiles: [],
    })
  }
})

app.post('/save-profile', async function (req, res) {
  const filePath = path.join(__dirname, 'public', 'data', 'profiles.json')
  const profileInformation = req.body

  const fileData = fs.readFileSync(filePath)
  const existingProfiles = JSON.parse(fileData)
  profileInformation.id = uuid.v4()
  existingProfiles.push(profileInformation)
  fs.writeFileSync(filePath, JSON.stringify(existingProfiles))

  res.render('index', {
    existingProfiles: existingProfiles,
  })
})

app.post('/', async function (req, res) {
  const filePath = path.join(__dirname, 'public', 'data', 'profiles.json')
  const fileData = fs.readFileSync(filePath)
  const existingProfiles = JSON.parse(fileData)

  for (const existingProfile of existingProfiles) {
    if (existingProfile.profileName === req.body.profileName) {
      res.render('index', {
        existingProfiles: existingProfiles,
        pomodoro: existingProfile.pomodoro,
        shortBreak: existingProfile.shortBreak,
        longBreak: existingProfile.longBreak,
      })
    }
  }
})

app.listen(3000)
