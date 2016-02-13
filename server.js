var express = require('express');
var queryString = require('querystring');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var _ = require ('lodash');

var app = express();

var createGame = require('./createGame');
var gameStore = require('./gamestore');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));