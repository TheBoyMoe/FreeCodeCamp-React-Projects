var express = require('express');

// create web app
var app = express();
app.use(express.static('public')); // folder to server
app.listen(3000, function () {
    console.log('Express Server is listening on PORT 3000');
});