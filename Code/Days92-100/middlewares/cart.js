// Check incoming requests
const Cart = require('../models/cart.models')

function initializeCart(req, res, next) {
  let cart
  const sessionCart = req.session.cart

  if (!sessionCart) {
    cart = new Cart()
    console.log('New Cart instance')
  } else {
    cart = new Cart(
      sessionCart.items,
      sessionCart.totalQuantity,
      sessionCart.totalPrice,
    )

    console.log('Cart instance already available')
  }
  console.log(cart)

  res.locals.cart = cart
  next()
}

module.exports = initializeCart
