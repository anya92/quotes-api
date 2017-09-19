const express = require('express');
const mongoose = require('mongoose');

const Quote = mongoose.model('Quote');
const router = express.Router();

const quoteController = require('../controllers/quoteController');
const { catchErrors } = require('../helpers');


router.get('/', (req, res) => {
  res.render('index');
});

router.post('/api/quotes', catchErrors(quoteController.createQuote));

router.get('/api/quotes', catchErrors(quoteController.getQuotes));

router.get('/api/quotes/random', catchErrors(quoteController.getRandomQuote));

router.get('/api/quotes/:id', catchErrors(quoteController.getQuoteById));


module.exports = router;
