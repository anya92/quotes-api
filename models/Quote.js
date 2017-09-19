const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Cytat musi posiadać tekst.'
  },
  author: {
    type: String,
    required: 'Cytat musi posiadać autora. Jeśli autor jest nieznany, wpisz "Nieznany autor".'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

quoteSchema.statics.getRandomQuote = function() {
  return this.aggregate([ 
    { 
      $sample: { 
        size: 1 
      }
    } 
  ]);
}


module.exports = mongoose.model('Quote', quoteSchema);
