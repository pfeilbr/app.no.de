var _ = require('underscore');
var express = require('express');
var app = express.createServer();
console.log(express.static);
app.configure(function(){
    app.use(express.static(__dirname + '/public'));    
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.get('/', function(req, res){
    res.send('underscore exists = ' + _);
});

app.listen(process.env.PORT || 8001);
