const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controllers')

router.get('/', perrosController.listar);

module.exports = router;