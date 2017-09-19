const express = require('express');
const path = require('path');
const logger = require('morgan');

const routes = require('./routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
