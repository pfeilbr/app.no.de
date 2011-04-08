var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World from Express');
});

app.listen(process.env.PORT || 8001);
