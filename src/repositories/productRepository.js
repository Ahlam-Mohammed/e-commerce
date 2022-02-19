const axioss = require('axios').default;
const axios  = axioss.create(
    {
        baseURL: 'https://dummyjson.com/'
    });

const getAllProducts = ()=> axios.get('products');
const getProductByID = (id) => axios.get(`products/${id}`);


module.exports = {
    getAllProducts,
    getProductByID
}