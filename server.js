var express = require('express');
var app = express.createServer();

app.configure(function(){
    app.use(express.static(__dirname + '/public'));    
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.get('/', function(req, res){
    res.send('Hello World from Express part 2');
});

app.listen(process.env.PORT || 8001);
