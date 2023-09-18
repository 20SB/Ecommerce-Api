const express = require('express');
const router = express.Router();

// Import the products controller
const productsController = require('../controller/products_controller');

// Route for the products page
router.get('/', productsController.products);
