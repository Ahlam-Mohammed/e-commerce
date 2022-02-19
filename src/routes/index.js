const express         = require('express');
const router          = express.Router();

const { products, detailsProduct } = require('../controllers/productController');

/**
 * Products Routers.
 */
router.get('/products' , products);
router.get('/product/:id' , detailsProduct);


module.exports = router;