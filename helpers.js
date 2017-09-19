exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.notFound = (req, res, next) => {
  res.send('404 Not Found');
};

exports.example1 = `[
  {
    "_id": "59c13a39a3496c1b3c78c74f",
    "index": 204,
    "text": "Wielcy ludzie nie rodzą się wielkimi, 
             tylko się nimi stają.",
    "author": "Mario Puzo – Ojciec Chrzestny"
  },
  {
    "_id": "59c13a39a3496c1b3c78c75b",
    "index": 216,
    "text": "Oczy są ślepe, należy szukać sercem.",
    "author": "Antoine de Saint-Exupéry – Mały Książę"
  }
]`;

exports.example2 = `[
  {
    "_id": "59c13a3ba3496c1b3c78c9a3",
    "index": 800,
    "text": "Są książki, których grzbiety i okładki 
             stanowią najlepszą ich część.",
    "author": "Charles Dickens"
  }
]`;

exports.example3 = `[
  {
    "_id": "59c13a39a3496c1b3c78c74e",
    "index": 203,
    "text": "Codziennie patrz na świat, 
             jakbyś oglądał go po raz pierwszy.",
    "author": "Éric-Emmanuel Schmitt – Oskar i pani Róża"
  }
]`;

exports.example4 = `[
  {
    "_id": "59c13a38a3496c1b3c78c686",
    "index": 3,
    "text": "Książki są lustrem: widzisz w nich tylko to, 
             co już masz w sobie.",
    "author": "Carlos Ruiz Zafón – Cień wiatru"
  }
]`;
