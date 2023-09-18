const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({ 
    name : String, 
    quantity : Number
},{
    versionkey : false
}); 

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;