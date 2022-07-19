const Category  = require('../../models/category')
const Product  = require('../../models/product')

exports.initialdata=async(req,res)=>{
    const categories = await Category.find({}).exec();
    const products = await Product.find({}).select('_id name price quantity slug description productPicture category').exec();
    res.status(200).json({
        categories,
        products
    })
}