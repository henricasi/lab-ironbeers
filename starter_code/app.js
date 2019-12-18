const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index.hbs');
});

app.get('/beers', (req, res, next) => {
  res.render('beers.hbs');
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beers.hbs');
});

app.listen(3000);
