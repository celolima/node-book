const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // procura por index.js automaticamente

const app = express();
app.use(bodyParser.json());
app.use('/', routes); // toda requisição será administrada pelo routes

module.exports = app;