/**
 * @file index.js
 * @description Inicialização do servidor
 * @author douglaspands
 */
'use strict';
const http = require('http');
const config = require('./config');
const app = require('./lib/server-express');
const server = http.createServer(app);
server.listen(config.server.PORT, () => {
    console.log(`Servidor iniciado na porta ${config.server.PORT}`);
});
