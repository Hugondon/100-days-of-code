const express = require('express')
const uuid = require('uuid')

const restaurantData = require('../util/restaurant-data')

const router = express.Router()

router.get('/restaurants', function (req, res) {
  let order = req.query.order
  let nextOrder = 'desc'

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc'
  }

  if (order === 'desc') {
    nextOrder = 'asc'
  }
  const storedRestaurants = restaurantData.getStoredRestaurants()

  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === 'asc' && resA.name > resB.name) ||
      (order === 'desc' && resB.name > resA.name)
    ) {
      return 1
    }
    return -1
  })

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  })
})

router.get('/restaurants/:id', function (req, res) {
  const restaurantId = req.params.id

  for (const storedRestaurant of storedRestaurants) {
    if (storedRestaurant.id === restaurantId) {
      return res.render('restaurant-detail', {
        restaurant: storedRestaurant,
      })
    }
    return res.status(404).render('404')
  }
})

router.get('/confirm', function (req, res) {
  res.render('confirm')
})
router.get('/index', function (req, res) {
  res.render('index')
})
router.get('/recommend', function (req, res) {
  res.render('recommend')
})
router.post('/recommend', function (req, res) {
  // Parse Data
  const restaurant = req.body
  restaurant.id = uuid.v4()

  const restaurants = restaurantData.getStoredRestaurants()
  restaurants.push(restaurant)

  restaurantData.storedRestaurants(restaurant)

  // Path to Redirect
  res.redirect('/confirm')
})

module.exports = router
