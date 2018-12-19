/**
 * @file logger
 * @description Criando modulo de logger configurado
 * @author douglaspands
 */
const winston = require('winston');
const config = require('../../config');

const logger = winston.createLogger({
  level: config.logger.LEVEL,
  format: winston.format.json(),
  transports: [],
});
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }
logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

module.exports = logger;
