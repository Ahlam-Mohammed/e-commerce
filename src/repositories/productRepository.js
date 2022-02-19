const axioss = require('axios').default;
const axios  = axioss.create(
    {
        baseURL: 'https://dummyjson.com/'
    });

const getAllProducts = ()=> axios.get('products');

module.exports = {
    getAllProducts,
}