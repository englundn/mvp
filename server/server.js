var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sttqz');

var app = express();


app.use(express.static(__dirname + '/../client'));

require('./routes.js')(app, express);

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

module.exports = app;