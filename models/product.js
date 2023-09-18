const mongoose = require('mongoose'); 

const productschema = new mongoose.Schema({ 
    name : string, 
    quantity : Number
},{
    versionkey : false
}); 

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;