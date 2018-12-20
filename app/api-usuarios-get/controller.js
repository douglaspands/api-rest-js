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
const controller = async (req, res) => {
  logger.info('rota [get] v1/usuarios');
  try {
    const listaUsuarios = service();
    return res.status(HttpStatus.OK).send({ data: listaUsuarios });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

module.exports = controller;
