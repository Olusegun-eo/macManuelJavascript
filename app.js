//Create Server
const express = require('express');
const { route } = require('./routes/greetingTwo');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 1406

/**Moved the following code to controller 
 app.get('/', function(req, res) {
     res.send('<h1>Hello makblr, Welcome to live streaming on the go</h1>')
 }) */


//Set view engin to ejs
app.set('view engine', 'ejs' )

//INSTEAD I CAN NOW APPLY THIS  to make request
app.use('/api/', require('./routes/greetingTwo'))


//Use "nodemon/ node server.js" for automatic update
app.listen(PORT, function(){
    const url = `http://localhost:${PORT}/`
    console.log("Server is running on port " +url+ "port")
});