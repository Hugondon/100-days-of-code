const fs = require('fs')

function readFile() {
  try {
    const fileData = fs.readFileSync('data.json')
  } catch (error) {
    // console.log(`An error occurred: ${error.message}`)
  }
  try {
    throw { message: 'Pay attention to your code exceptions, dumbass' }
  } catch (error) {
    console.log(`Exception caught. Message: ${error.message}`)
  }
  //   console.log('Hi there!')
}

readFile()

// module.exports{
//     readFile: readFile
// }
