const { getAllProducts, getProductByID, searchProduct } = require('../repositories/productRepository');

// Get All Products
const products = async (req, res, next) => {
    try{
        const { data } = await getAllProducts();
        res.render("page/products", {products: data.products});
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
        res.render("page/details-product", {product: data});
    } catch (error) {
        res.json({error})
    }
}

// Search Products
const search = async (req, res, next) => {
    const query = req.body.data;
    try {
        const { data } = await searchProduct(query);
        res.render("page/products", {products: data.products});
    } catch (error) {
        res.json({error})
    }
}

module.exports = {
    products,
    detailsProduct,
    search
}