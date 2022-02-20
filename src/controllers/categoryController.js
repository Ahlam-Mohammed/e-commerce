const { getAllCategories, getAllProductByCategory } = require('../repositories/categoryRepository')

// Get All Categories
const categories = async (req, res, next) => {
    try {
        const { data } = await getAllCategories();
        res.render('page/categories', {categories: data})
    } catch (error) {
        res.json({error});
    }
}

// Get details Category
const detailsCategory = async (req, res, next) => {
    const category = req.params.category;
    try {
        const { data } = await getAllProductByCategory(category);
        res.render('page/products', {products: data.products})
    } catch (error) {
        res.json({error});
    }
}

module.exports = {
    categories,
    detailsCategory
}