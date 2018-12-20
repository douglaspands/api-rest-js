/**
 * @file controller.js
 * @description Controller da api
 * @author douglaspands
 */
const HttpStatus = require('http-status-codes');
const logger = require('../../lib/logger');
const service = require('./service');
/**
 * Controller de pesquisa de usuarios.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const controller = (req, res) => {
  logger.info('rota [get] v1/usuarios');
  try {
    const listaUsuarios = service();
    if (listaUsuarios.length < 1) {
      res.status(HttpStatus.NO_CONTENT).send();
    } else {
      res.status(HttpStatus.OK).send({ data: listaUsuarios });
    }
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

module.exports = controller;
