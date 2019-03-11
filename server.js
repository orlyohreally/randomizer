const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/api/phrases', function(req, res){
	Phrase.find(function(err, result) {
		if(err) {
			return console.error(err);
		}
		res.send(result);
	})

});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log("Listening on port ", process.env.PORT || 8080);

var db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/randomizer');
phraseSchema = createPhrasesCollection();
Phrase = mongoose.model('Phrase', phraseSchema);
//createPhrases();

function createPhrasesCollection() {
	return new mongoose.Schema({
		id: Number,
		text: String
	});
}
function createPhrases() {
	var newPhrase = new Phrase({id: 1, text: "text testing"});
	newPhrase.save(function(err, res) {
		console.log(err, res);
	});
}
