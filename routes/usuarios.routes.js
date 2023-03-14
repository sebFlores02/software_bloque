const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');

router.get('/signup', usuariosController.signup);

router.get('/logout', usuariosController.logout);

module.exports = router;