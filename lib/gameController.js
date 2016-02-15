var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/gamePage', function(req, res){
    var parameters = req.body;
    var name = parameters.name;
    res.cookie('name',name);
	res.redirect('/gamePage.html');
});

var GameController = function(game) {
	return function(req, res){
		req.game = game;
		app(req, res);
	};
};

module.exports = GameController;
