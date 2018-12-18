/**
 * @file controller.js
 * @description Controller da api
 * @author douglaspands
 */
'use strict';
const service = require('./service');
const logger = require('../../lib/logger');
/**
 * Controller de pesquisa de funcionarios.
 * @param {Express.Request} req 
 * @param {Express.Response} res
 */
const controller = async (req, res) => {
    logger.info('rota [get] v1/funcionarios');
    try {
        const listaFuncionarios = service();
        return res.status(200).send({ data: listaFuncionarios });
    } catch (error) {
        return res.status(500).send(error);
    }

}

module.exports = controller;
