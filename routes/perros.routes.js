const express = require('express');
const path = require('path');

const router = express.Router();

const razas = [`Beagle`, `Golden`, `Husky`, `Dalmata`, `Chihuaha`, `Chilakil`, `Pug`]

router.get('/', (request, response, next) => {
    response.render('lista', {razas: razas});
    // el primer razas es como desde lista ejs le vamos a llamar, la segunda es el arreglo de este documento
});

module.exports = router;