var passport = require("passport");
var mongoose = require("mongoose");
var Person = mongoose.model("Person");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  var newPerson = req.body;
  if (!newPerson.login || !newPerson.password) {
    sendJSONresponse(res, 400, {
      message: "All fields required"
    });
    return;
  }

  var person = new Person();
  person.login = newPerson.login;
  person.setPassword(newPerson.password);

  person.save(function(err) {
    var token;
    token = person.generateJwt();
    res.status(200);
    res.json({
      token: token
    });
  });
};

module.exports.login = function(req, res) {
  console.log(req.body);
  if (!req.body.login || !req.body.password) {
    sendJSONresponse(res, 400, {
      message: "All fields required"
    });
    return;
  }

  passport.authenticate("local", function(err, person, info) {
    var token;
    if (err) {
      res.status(404).json(err);
      return;
    }

    if (person) {
      token = person.generateJwt();
      res.status(200);
      res.json({
        token: token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};
