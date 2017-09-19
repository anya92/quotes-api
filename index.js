const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('it works');
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
