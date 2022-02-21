const express = require('express');
const router  = express.Router();

const productController  = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');

const {index} = require('../controllers/homeController');

/**
 * Home Router.
 */
router.get('/', index);

/**
 * Products Routers.
 */
router.get('/products', productController.products);
router.get('/product/:id', productController.detailsProduct);

/**
 * Categories Routers.
 */
router.get('/categories', categoryController.categories);
router.get('/products/categories/:category', categoryController.detailsCategory);

/**
 * Search Router.
 */
router.post('/search' ,productController.search)


module.exports = router;