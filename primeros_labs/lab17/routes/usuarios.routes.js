const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarios.controllers')

router.get('/nuevo', usuarioController.get_nuevo);

router.post('/nuevo', usuarioController.post_nuevo);

router.get('/:id', usuarioController.listar);

router.get('/', usuarioController.listar);

module.exports = router;