const express = require('express')
const multer = require('multer')

const db = require('../data/database')

// multer will store in images folder
// const upload = multer({ dest: 'images' })
// complete storage object

// 'images' is destination path
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storageConfig })
const router = express.Router()

router.get('/', async function (req, res) {
  const users = await db.getDb().collection('users').find().toArray()

  res.render('profiles', { users: users })
})

router.get('/new-user', function (req, res) {
  res.render('new-user')
})

// name assigned to file in input
router.post('/profile', upload.single('image'), async function (req, res) {
  const uploadedImageFile = req.file
  const userData = req.body

  await db.getDb().collection('users').insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path,
  })

  res.redirect('/')
})

module.exports = router
