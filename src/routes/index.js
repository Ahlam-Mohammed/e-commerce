const express         = require('express');
const router          = express.Router();

const { getProducts } = require('../controllers/productController');

/**
 * Products Routers.
 */
router.get('/products' , getProducts);

module.exports = router;