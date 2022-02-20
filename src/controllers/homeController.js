const { getAllCategories }     = require('../repositories/categoryRepository');
const { getAllProducts }       = require('../repositories/productRepository');


// Get details Category
const index = async (req, res, next) => {
    try {
        // const { data } = await getAllCategories();
        const categories = await getAllCategories();
        // const { data }   = await getAllProducts();
        const product = await getAllProducts();
        // console.log(categories.data)
        // console.log(product)
        res.render('index', {categories: categories.data, products: product.data.products })
    } catch (error) {
        res.json({error});
    }
}

module.exports = {
    index
}