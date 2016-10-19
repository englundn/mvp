
var path = require('path');
var request = require('request');
var userController = require('./users/userModel');

module.exports = function(app, express) {
  app.post('/api/signin', userController.signin);
  app.post('/api/signup', userController.signup);
  app.get('/api/:state', function(req, res) {
    var state = req.params.state;
    request('https://en.wikipedia.org/wiki/' + req.params.state, function(err, res2, html) {
      var cleanHtml = html.split('srcset="//');
      cleanHtml.splice(0, 1);
      cleanHtml = cleanHtml.map(function(snippet) {
        return snippet.split(' ')[0];
      });
      res.send(cleanHtml);
    });
  });
};