const express = require('express');
const router = express.Router();

// Import the products controller
const productsController = require('../controller/products_controller');

// Route for the products page
router.get('/', productsController.products);

// Route for creating a product
router.post('/create', productsController.create);

// Route for deleting the product
router.delete('/:productId', productsController.delete);

// Route for updating the product
router.post('/:productId/update_quantity', productsController.updateQuantity);

// Export the main router to be used in your application
module.exports = router;