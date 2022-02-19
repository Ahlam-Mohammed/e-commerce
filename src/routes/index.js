const express         = require('express');
const router          = express.Router();

const { products, detailsProduct }    = require('../controllers/productController');
const { categories, detailsCategory } = require('../controllers/categoryController')


/**
 * Products Routers.
 */
router.get('/products' , products);
router.get('/product/:id' , detailsProduct);

/**
 * Categories Routers.
 */
router.get('/categories', categories);
router.get('/products/categories/:category', detailsCategory);


module.exports = router;