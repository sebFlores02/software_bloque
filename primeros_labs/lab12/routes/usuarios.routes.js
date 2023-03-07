const express = require('express');

const router = express.Router();

const usuarios = [
    {
        nombre: "Benito Tagle",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        descripcion: "Estudio Ingenieria Mecanica en A&M"
    },
    {
        nombre: "Patricio Becerril",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "becerrilp2002",
        descripcion: "Estudio Derecho en la Universidad Panamericana"
    },
    {
        nombre: "Marcelo Da Paz Leal",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "dapazleal",
        descripcion: "Estudio Computer Science en Mich University"
    }
]

router.get('/', (request, response, next) => {
    response.render('lista', {usuarios: usuarios});
});

module.exports = router;