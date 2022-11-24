const express = require('express')

const adminController = require('../controllers/admin.controllers')
const imageUploadMiddleware = require('../middlewares/image-upload')

const router = express.Router()

// Automatically prefix with admin :O
// router.get('/admin/products', authController.getSignup)
// router.get('/admin/products/new', authController.signup)
router.get('/products', adminController.getProducts)
router.get('/products/new', adminController.getNewProduct)

// Execute middleware before creating new product
router.post(
  '/products',
  imageUploadMiddleware,
  adminController.createNewProduct,
)
module.exports = router
