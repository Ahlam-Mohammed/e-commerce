const express         = require('express');
const router          = express.Router();

const { products, detailsProduct, search }    = require('../controllers/productController');
const { categories, detailsCategory }         = require('../controllers/categoryController')


/**
 * Products Routers.
 */
router.get('/products', products);
router.get('/product/:id', detailsProduct);
router.get('/products/search', search);

/**
 * Categories Routers.
 */
router.get('/categories', categories);
router.get('/products/categories/:category', detailsCategory);


module.exports = router;