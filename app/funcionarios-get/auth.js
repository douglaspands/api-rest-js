/**
 * @file auth.js
 * @description Autenticaçãod a API
 * @author douglaspands
 */
'use strict';

const auth = (req, res, next) => {
    if (req.headers.token === 'teste'){
        return next();
    } else {
        return res.status(401).send('Usuario não autorizado');
    }
}

module.exports = auth;