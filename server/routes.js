var imageFetcher = require('./imageFetcher.js');

var path = require('path');
var request = require('request');

module.exports = function(app, express) {
  // app.get('*', function(req, res) {
  //   res.sendFile(path.resolve(__dirname + '/../client/index.html'));
  // });
  app.get('/api/:state', function(req, res) {
    var state = req.params.state;
    request('https://en.wikipedia.org/wiki/' + req.params.state, function(err, res2, html) {
      //https://www.google.com/search?tbm=isch&q=
      // res2.setEncoding('utf8');
      var cleanHtml = html.split('srcset="//');
      cleanHtml.splice(0, 1);
      cleanHtml = cleanHtml.map(function(snippet) {
        return snippet.split(' ')[0];
      });
      console.log(cleanHtml.length);
      res.send(cleanHtml[32]);
    });
  });


};