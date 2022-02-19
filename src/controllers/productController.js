const { getAllProducts, getProductByID } = require('../repositories/productRepository');

// Get All Products
const products = async (req, res, next) => {
    try{
        const { data } = await getAllProducts();
        res.json({...data});
    }
    catch (error){
        res.json({error});
    }
}

// Get details Product
const detailsProduct = async (req, res, next) => {
    const ID = req.params.id;
    try {
        const { data } = await getProductByID(ID);
        res.json({...data});
    } catch (error) {
        res.json({error})
    }
}

module.exports = {
    products,
    detailsProduct
}