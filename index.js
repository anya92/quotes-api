const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const { notFound } = require('./helpers');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config({ path: 'variables.env' })

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error(error.message);
});

require('./models/Quote');

const routes = require('./routes');

app.use(logger('dev'));
app.use('/', routes);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
