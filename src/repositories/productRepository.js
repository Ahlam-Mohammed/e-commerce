const axioss = require('axios').default;
const axios  = axioss.create(
    {
        baseURL: 'https://dummyjson.com/'
    });

const getAllProducts = () => axios.get('products');
const getProductByID = (id) => axios.get(`products/${id}`);
const searchProduct  = (query) => axios.get(`products/search?q=${query}`)


module.exports = {
    getAllProducts,
    getProductByID,
    searchProduct
}