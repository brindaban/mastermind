var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/gamePage', function(req, res){
	res.redirect('/gamePage.html');
});

var GameController = function(game) {
	return function(req, res){
		req.game = game;
		app(req, res);
	};
};

module.exports = GameController;