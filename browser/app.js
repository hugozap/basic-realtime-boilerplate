var domready            = require('domready');
var through             = require('through');
var shoe                = require('shoe');
var serverStream  = shoe('/data');

domready(function(){
	 document.querySelector('form').addEventListener('submit', function(ev){
	 	serverStream.write(document.querySelector('#message').value);
	 	console.log('message sent');
	 	ev.preventDefault();
	 })

	 serverStream
	 	.pipe(through(showAndPass));

})


function showAndPass(chunk){
	var elem = document.createElement('div');
	elem.innerText = chunk.toString();
	document.body.appendChild(elem);
	this.push(chunk);
}


