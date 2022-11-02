const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

let database
const uri = 'mongodb://127.0.0.1:27017'

async function connect() {
  const client = await MongoClient.connect(uri)
  database = client.db('blog')
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection not established!' }
  }
  return database
}

// Expose functions to outside world
module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
}
