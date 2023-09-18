const mongoose = require('mongoose');

const DB = 'mongodb+srv://subhabiswal100:QAMqOf8ja2GW9oBL@cluster0.piyhowh.mongodb.net/Ecommerce';

// connect to the database
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})

// exporting the database
module.exports = db;