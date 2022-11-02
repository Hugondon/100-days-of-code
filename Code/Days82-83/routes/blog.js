const express = require('express')
const mongodb = require('mongodb')

const db = require('../data/database')
const ObjectId = mongodb.ObjectId

const router = express.Router()

router.get('/', function (req, res) {
  res.redirect('/posts')
})

router.get('/posts', async function (req, res) {
  // const posts = await db.getDb().collection('posts').find().toArray()
  const posts = await db
    .getDb()
    .collection('posts')
    // .find({}, { title: 1, summary: 1, 'author.name': 1 })
    .find({})
    .project({ title: 1, summary: 1, 'author.name': 1 })
    .toArray()

  res.render('posts-list', { posts: posts })
})

router.get('/new-post', async function (req, res) {
  // const documentsCursor = await db.getDb().collection('authors').find()
  const authors = await db.getDb().collection('authors').find().toArray()
  console.log(authors)
  res.render('create-post', { authors: authors })
})

router.post('/posts', async function (req, res) {
  console.log(req.body.author)
  const authorId = new ObjectId(req.body.author)
  const author = await db.getDb().collection('authors').findOne({
    _id: authorId,
  })

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  }

  const result = db.getDb().collection('posts').insertOne(newPost)
  console.log(result)

  res.redirect('/posts')
})

module.exports = router
