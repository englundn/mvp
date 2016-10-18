module.exports = function(req, res) {
  var state = req.params.state;
  this.get('https://www.google.com/search?tbm=isch&q=' + state, function(req2, res2) {
    res.send(res2.body);
  });
};