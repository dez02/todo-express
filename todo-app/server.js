const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

const app = express();

const routes = require('./routes/index');

mongoose.connect('localhost:27017/todoapp');

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(routes);

app.listen(3000, () => {
  console.log('Welcome!');
});
