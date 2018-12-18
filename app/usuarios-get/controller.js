/**
 * @file controller.js
 * @description Controller da api
 * @author douglaspands
 */
'use strict';
const service = require('./service');
/**
 * Controller de pesquisa de usuarios.
 * @param {Express.Request} req 
 * @param {Express.Response} res
 */
const controller = async (req, res) => {

    try {
        const listaUsuarios = service();
        return res.status(200).send({ data: listaUsuarios });
    } catch (error) {
        return res.status(500).send(error);
    }

}

module.exports = controller;