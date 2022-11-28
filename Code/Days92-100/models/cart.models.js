class Cart {
  constructor(items = [], totalQuantity = 0, totalPrice = 0) {
    this.items = items
    this.totalQuantity = totalQuantity
    this.totalPrice = totalPrice
  }

  addItem(product) {
    let cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price,
    }

    console.log('New Item clicked')

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.product.id === product.id) {
        cartItem.quantity = item.quantity + 1
        cartItem.totalPrice = item.totalPrice + product.price
        this.items[i] = cartItem

        this.totalQuantity++
        this.totalPrice += product.price
        return
      }
    }

    this.items.push(cartItem)
    this.totalQuantity++
    this.totalPrice += product.price
  }
}

module.exports = Cart
