var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Person
      .findById(req.payload._id)
      .exec(function(err, person) {
        res.status(200).json(person);
      });
  }

};
