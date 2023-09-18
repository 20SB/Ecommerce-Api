// Import the Mongoose library
const mongoose = require('mongoose');

// Define a schema for the "Product" collection
const productSchema = new mongoose.Schema({
    // Define the "name" field as a string
    name: String,
    // Define the "quantity" field as a number
    quantity: Number
}, {
    // Disable version key ("__v") in documents
    versionKey: false
});

// Create a Mongoose model named "Product" based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the "Product" model to use it in other parts of the application
module.exports = Product;
