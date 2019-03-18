var mongoose = require( 'mongoose' );

var phraseSchema = new mongoose.Schema({
		text: String
});

mongoose.model('Phrase', phraseSchema);
