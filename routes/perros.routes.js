const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controllers')

router.get('/nuevo', perrosController.get_nuevo);

router.post('/nuevo', perrosController.post_nuevo);

router.get('/', perrosController.listar);

module.exports = router;