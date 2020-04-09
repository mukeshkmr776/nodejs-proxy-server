const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

//make way for some custom css, js and images
app.use('/css'   , express.static(__dirname + '/public/css'));
app.use('/js'    , express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

module.exports = {
    start: function (PORT) {
        app.listen(PORT, function() {
            console.log("Server-2 started at http://localhost:%s", PORT);
        });
    }
};

