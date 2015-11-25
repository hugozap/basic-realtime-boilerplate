var shoe = require('shoe');
var http = require('http'); 
var filter = require('filter-stream');
var through = require('through');

var ecstatic = require('ecstatic')(__dirname + '/public');
var server = http.createServer(ecstatic);
var clients = [];

//Crear web socket como stream 
var sock = shoe(function (stream) {

   clients.push(stream);
   stream.pipe(through(function(chunk){
   	broadcast(chunk, clients, stream);
   }));

   stream.on('end', function(){
   		clients.remove(stream);
   		console.log('client disconnected');
   })
});

function broadcast(chunk, clients, sourceStream){
	clients.forEach(function(clientStream){
		//Do not broadcast to source stream
		if(sourceStream && clientStream === sourceStream)
			return;
		clientStream.write(chunk);

	})
}

sock.install(server, '/data');

server.listen(9999, function(){
	console.log('listening at 9999');
});