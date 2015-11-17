var Hapi = require('hapi');
var Vision = require('vision');
var Inert = require('inert');

var server = new Hapi.Server();

server.connection({port:3000});

server.register(Inert, function () {});
server.register(Vision, function () {});

server.views({
	engines:{
		html: require('handlebars')
	},
	path: './templates'
});