var util = require('util'),
    _ = require('underscore'),
    express = require('express'),
    io = require('socket.io'),
    app = express.createServer(),
    //redis = require("redis"),
    //rc = redis.createClient(),
    port = 8003;

/*
rc.get('name', function(err, res) {
   console.log(res); 
});
*/

app.configure(function(){
    
    app.use(function(req, res, next){
       req.custom = "hello custom";
       next();
    });
        
    app.use(express.static(__dirname + '/public'));    
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);    
    
});

app.get('/', function(req, res){
    //res.send('test');
    res.send("<h1>Request Dump -> util.inspect(req)</h1><pre>" + util.inspect(req) + "</pre>");
});

app.get('/chat', function(req, res) {
    res.render('chat.ejs', {layout: false, title: 'Chatastic', port: port});
});

app.listen(port);

// socket.io 
var socket = io.listen(app); 
socket.on('connection', function(client){ 
  // new client is here! 
  client.on('message', function(data) {
      client.broadcast({name: client.sessionId, msg: data});
  });
  
  client.on('disconnect', function() {
      
  });
  
  client.send({name: client.sessionId, msg: 'welcome'});
});
