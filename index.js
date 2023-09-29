// Import the Express.js framework
const express = require('express');
// Create an instance of the Express app
const app = express();
const cors = require('cors'); // Import the cors middleware

// Import the body-parser middleware for parsing request bodies
const bodyParser = require("body-parser");
// Import the database configuration
const db = require('./config/mongoose');

// Use body-parser middleware to parse the request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine for rendering dynamic templates
app.set('view engine', 'ejs');
app.set('views', './views');

// Use CORS middleware with a wildcard '*' to allow any origin
app.use(cors());

// Use routes defined in the 'routes/index.js' file
app.use("/", require('./routes/index'));

// Start the server and listen on port 5000
app.listen(5000, function () {
    console.log('Server is running on port: 5000');
});
