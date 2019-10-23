express = require('express');
app = express();

function handler(req,res) {
 res.sendFile(__dirname + '/index.html');
}

app.get('/', handler);

// var PORT = 3000;
var PORT = process.env.PORT || 8080;

app.listen(PORT, function(req,res) {
 console.log('server started');
});