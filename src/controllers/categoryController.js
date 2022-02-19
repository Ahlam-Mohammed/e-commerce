const { getAllCategories } = require('../repositories/categoryRepository')

const categories = async (req, res, next) => {
    try {
        const { data } = await getAllCategories();
        res.json({...data});
    } catch (error) {
        res.json({error});
    }
}

module.exports = {
    categories,
}