const axioss = require('axios').default;
const axios  = axioss.create(
    {
        baseURL: 'https://dummyjson.com/'
    });

const getAllCategories        = () => axios.get('products/categories');
const getAllProductByCategory = (category) => axios.get(`products/category/${category}`);

module.exports = {
    getAllCategories,
    getAllProductByCategory
}