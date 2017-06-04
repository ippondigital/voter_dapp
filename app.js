
var express = require('express');
var bodyParser = require('body-parser');
var session = require('client-sessions');
var Web3 = require('web3');
var fs = require('fs');
var waitUntil = require('wait-until');

global.waitUntil = waitUntil;

// Load jsdom, and create a window.
var app = express();

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
//include the public folder
app.use(express.static('public'));

app.use(session({
  cookieName: 'session',
  secret: 'voter_dapp_is_the_bomb',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

//set a global variable so you can call on it
global.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
global.fs = fs;

require('./routes/routes.js')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});