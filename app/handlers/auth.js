/**
 * @file auth.js
 * @description Autenticaçãod a API
 * @author douglaspands
 */
const HttpStatus = require('http-status-codes');
const logger = require('../../lib/logger');
/**
 * Handler de autenticação.
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.Next} next Será executado caso o token sejá valido.
 */
const auth = (req, res, next) => {
  if (req.headers.token === 'teste') {
    logger.debug('usuario autorizado');
    return next();
  }
  logger.debug('usuario não autorizado');
  return res.status(HttpStatus.UNAUTHORIZED).send();
};

module.exports = auth;
