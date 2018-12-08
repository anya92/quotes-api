const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");

exports.getQuotes = async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
};

exports.createQuote = async (req, res) => {
  const lastQuote = await Quote.find()
    .sort({ index: -1 })
    .limit(1);
  const index = lastQuote[0]["index"] + 1;
  const { text, author } = req.body;
  const quote = await new Quote({ index, text, author }).save();
  res.json(quote);
};

exports.getRandomQuote = async (req, res) => {
  const quote = await Quote.getRandomQuote();
  res.json(quote);
};

exports.getQuoteById = async (req, res) => {
  const quote = await Quote.find({ index: req.params.id });
  res.json(quote);
};

exports.deleteQuoteById = async (req, res) => {
  await Quote.deleteOne({ index: req.params.id });
  res.json({ message: "Successfully deleted." });
};
