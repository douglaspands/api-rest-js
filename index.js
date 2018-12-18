/**
 * @file index.js
 * @description Inicialização do servidor
 * @author douglaspands
 */
'use strict';
const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();

const server = http.createServer(app);
server.listen(config.server.PORT, () => {
    console.log(`Servidor iniciado na porta ${config.server.PORT}`);
});
