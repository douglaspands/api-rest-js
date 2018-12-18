/**
 * @file route.js
 * @description Configurações de rota
 * @author douglaspands
 */
'use strict';
const router = require('express').Router();
const auth = require('./auth');
const controller = require('./controller');

router.get('/v1/usuarios', [auth, controller]);

module.exports = router;
