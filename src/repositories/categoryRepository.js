const axioss = require('axios').default;
const axios  = axioss.create(
    {
        baseURL: 'https://dummyjson.com/'
    });

const getAllCategories = ()=> axios.get('products/categories');

module.exports = {
    getAllCategories,
}