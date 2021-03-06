/**
 * @file index.js
 * @description Inicialização do servidor
 * @author douglaspands
 */
const http = require('http');
const config = require('./config');
const logger = require('./lib/logger');
const app = require('./lib/server-express');

const server = http.createServer(app);
server.listen(config.server.PORT, () => {
  logger.info(`Servidor iniciado na porta ${config.server.PORT} (pid: ${process.pid})`);
});

process.on('SIGINT', () => {
  process.exit(0);
});

module.exports = server;
