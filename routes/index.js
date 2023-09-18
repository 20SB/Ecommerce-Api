const express = require('express');
const router = express.Router();

// Import the home controller
const homeController = require('../controller/home_controller');

// Route for the home page
router.get('/', homeController.home);

// Use the users router for handling user-related routes
router.use('/products', require('./product'));


// Export the main router to be used in your application
module.exports = router;