var express = require('express');
var socket = require('socket.io')
//App setup
var app = express();
var server = app.listen(5000, function(){
	console.log('Listening to request on port 5000');
});

app.use(express.static('public'));

//Socket Setup

var io = socket(server);

io.on('connection', function(socket){
	socket.on('chat', function(data){
		io.sockets.emit('chat', data)
	});
	socket.on('typing', (data)=> {
		socket.broadcast.emit('typing', data)
	})
})
