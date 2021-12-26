const express = require('express');
const router = express.Router();
const productsContoller = require('../controllers/products');

// CREATE -> POST : localhost:3000/v1/customer/product
router.post('/product', productsContoller.createProduct);
// READ -> GET : localhost:3000/v1/customer/products
router.get('/products', productsContoller.getAllProducts);

module.exports = router;