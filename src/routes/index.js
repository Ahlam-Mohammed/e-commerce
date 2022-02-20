const express         = require('express');
const router          = express.Router();

const { products, detailsProduct, search } = require('../controllers/productController');
const { categories, detailsCategory }      = require('../controllers/categoryController');

const {index} = require('../controllers/homeController');

/**
 * Home Router.
 */
router.get('/', index);

/**
 * Products Routers.
 */
router.get('/products', products);
router.get('/product/:id', detailsProduct);

/**
 * Categories Routers.
 */
router.get('/categories', categories);
router.get('/products/categories/:category', detailsCategory);

/**
 * Search Router.
 */
router.post('/search' ,search)


module.exports = router;