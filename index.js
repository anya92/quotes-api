const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes');
const PORT = process.env.PORT || 8080;
const { USER_NAME, PASSWORD } = require('./config.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const DATABASE_URL = `mongodb://${USER_NAME}:${PASSWORD}@ds139884.mlab.com:39884/quotes-api`;

mongoose.connect(DATABASE_URL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error(error.message);
});

app.use(logger('dev'));
app.use('/', routes);

require('./models/Quote');

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
