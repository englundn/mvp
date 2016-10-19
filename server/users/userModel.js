var Promise = require('bluebird');
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  highscore: {
    type: Number,
    default: 0
  }
});


var User = mongoose.model('User', UserSchema);

var findUser = Promise.promisify(User.findOne, User);
var createUser = Promise.promisify(User.create, User);

module.exports = {
  signin: function (req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username}).then(function(user) {
      if (!user) {
        console.error('User does not exist.');
        res.send();
      } else {
        if (user.password === password) {
          console.log('Logged in.');
          res.send(user);
        }
      }
    });
  },
  signup: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    findUser({username: username}).then(function(user) {
      if (user) {
        console.error('User already exists!');
        res.send();
      } else {
        createUser({username: username, password: password});
        res.send({username: username, password: password});
      }
    });
  }
};