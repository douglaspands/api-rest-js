/**
 * @file express-js
 * @author douglaspands
 */


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const listRoutes = require('../search-routes');
// adicionando rotas
listRoutes.forEach(route => app.use(route));

module.exports = app;
