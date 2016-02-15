var http = require('http');
var GameController = require('./lib/gameController.js');
var game = require('./lib/game.js');

var controller = GameController(new game());

http.createServer(controller).listen(3456).on('error',function(err){
	console.log(err.message);
});
