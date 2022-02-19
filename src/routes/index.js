const express         = require('express');
const router          = express.Router();

const { products, detailsProduct } = require('../controllers/productController');
const { categories } = require('../controllers/categoryController')


/**
 * Products Routers.
 */
router.get('/products' , products);
router.get('/product/:id' , detailsProduct);

/**
 * Categories Routers.
 */
router.get('/categories', categories);

module.exports = router;