const express = require('express');
const app = express();

const bodyParser = require("body-parser"); 
const db = require('./config/mongoose'); 

// using body parser to parse over the request body 
app.use(bodyParser.urlencoded ({extended : true}));
 
// set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// using routes 
app.use("/", require('./routes/index')); 

app.listen(5000, function(){
    console.log('Server is running on port: 5000');
})