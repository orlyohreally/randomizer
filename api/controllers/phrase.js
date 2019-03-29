var mongoose = require("mongoose");
var Phrase = mongoose.model("Phrase");

module.exports.list = function(req, res) {
  Phrase.find().exec(function(err, phrases) {
    res.status(200).json(phrases);
  });
};

module.exports.create = function(req, res) {
  console.log("create", req.body);
  newPhrase = new Phrase();
  newPhrase.text = req.body.text;
  newPhrase.save();
  res.status(200).json(newPhrase);
};

module.exports.update = function(req, res) {
  console.log("update", req.body);
  Phrase.findOne({ _id: req.params.id }).exec(function(err, phrase) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    phrase.text = req.body.text;
    phrase.save();
    res.status(200).json(phrase);
  });
};

module.exports.delete = function(req, res) {
  console.log("delete", req.body);
  Phrase.findOneAndDelete({ _id: req.params.id }).exec(function(err, phrase) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json({ message: "successfully deleted" });
  });
};
