var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var keys = require('./keys.js');
var mainCtrl = require('./server/controllers/mainCtrl');

var app = express();

mongoose.set('debug', true); //log connection methods
mongoose.connect('mongodb://localhost/plants');
mongoose.connection.once('open', function() {
    console.log('connected to MongoDB');
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/zip', mainCtrl.postZip);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});
