var mongoose = require('mongoose');
var Phrase = mongoose.model('Phrase');

module.exports.list = function(req, res) {
  Phrase
    .find()
    .exec(function(err, phrases) {
      res.status(200).json(phrases);
    });


};
