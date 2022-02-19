const { getAllProducts } = require('../repositories/productRepository');

// Get All Products
const getProducts = async (req, res, next) => {
    try{
        const { data } = await getAllProducts();
        res.json({...data});
    }
    catch (error){
        res.json({error});
    }
}

module.exports = {
    getProducts,
}