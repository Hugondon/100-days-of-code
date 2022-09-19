const fs = require('fs/promises')

function readFile() {
  let fileData

  //   fileData = fs.readFileSync('data.txt')
  //   fileData = fs.readFile('data.txt', function (error, fileData) {
  //     console.log('File parsing done!')
  //     console.log(fileData.toString())
  //   })

  fs.readFile('data.txt')
    .then(function (fileData) {
      console.log('File parsing done!')
      console.log(fileData.toString())
      //   return anotherAsyncOpertaion
    })
    .then(function () {
      console.log('Last operation')
    })
    .catch(function (error) {
      console.log(error)
    })

  console.log('Hi there')
}

async function asyncReadFile() {
  let fileData

  try {
    fileData = await fs.readFile('data.txt')
  } catch (error) {
    console.log(error)
  }
  console.log('File parsing done!')
  console.log(fileData.toString())

  console.log('Hi there')
}

readFile()
asyncReadFile()
