var express = require('express');
var app = express.createServer();

app.configure(function(){
    app.use(express.static(__dirname + '/public'));    
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

var users = [
    { id: 0, name: 'tj', email: 'tj@vision-media.ca', role: 'member' }
  , { id: 1, name: 'ciaran', email: 'ciaranj@gmail.com', role: 'member' }
  , { id: 2, name: 'aaron', email: 'aaron.heckmann+github@gmail.com', role: 'admin' }
];

app.get('/', function(req, res){
    res.send('Hello World from Express part 2<br/>' + users);
});

app.listen(process.env.PORT || 8001);
