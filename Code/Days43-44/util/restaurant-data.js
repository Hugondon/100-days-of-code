const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '..', 'data', 'restaurants.json')

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)

  return storedRestaurants
}

function storeRestaurants(storableRestaurant) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurant))
}
// name in other files : name of function
module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storedRestaurants: storeRestaurants,
}
