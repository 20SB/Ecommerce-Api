const express = require('express');
const app = express();

const bodyParser = require("body-parser"); 
const db = require('./config/mongoose'); 

// using body parser to parse over the request body 
app.use(bodyParser.urlencoded ({extended : true}));
 
// using routes 
app.use("/products", require('./routes/product')); 

app.listen(8000, function(){
    console.log('Server is running on port: 8000');
})