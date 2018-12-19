/**
 * @file route.js
 * @description Configurações de rota
 * @author douglaspands
 */
const router = require('express').Router();
const auth = require('../handlers/auth');
const controller = require('./controller');

router.get('/v1/usuarios', [auth, controller]);

module.exports = router;
