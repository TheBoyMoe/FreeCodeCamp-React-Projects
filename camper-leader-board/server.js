let express = require('express');

// create web app
let app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('app')); // folder to server
app.listen(PORT, function () {
    console.log(`Express Server is listening on port ${PORT}`);
});