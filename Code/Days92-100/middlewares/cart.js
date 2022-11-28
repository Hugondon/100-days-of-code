// Check incoming requests
const Cart = require('../models/cart.models')

function initializeCart(req, res, next) {
  let cart
  const sessionCart = req.session.cart

  if (!sessionCart) {
    cart = new Cart()
  } else {
    cart = new Cart(
      sessionCart.items,
      sessionCart.totalQuantity,
      sessionCart.totalPrice,
    )
  }

  res.locals.cart = cart
  next()
}

module.exports = initializeCart