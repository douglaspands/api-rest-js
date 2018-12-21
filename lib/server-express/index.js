/**
 * @file server-express
 * @description Configurações do servidor
 * @author douglaspands
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/healthcheck', require('express-healthcheck')());

const listRoutes = require('../search-routes');
// adicionando rotas
listRoutes.forEach(route => app.use(route));

module.exports = app;
