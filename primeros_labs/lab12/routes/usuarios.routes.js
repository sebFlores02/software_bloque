const express = require('express');

const router = express.Router();

const usuarios = [
    {
        nombre: "Benito Tagle",
        escuela: "Texas A&M",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        descripcion: "Estudio Ingenieria Mecanica en A&M",
        likes: 1200
    },
    {
        nombre: "Patricio Becerril",
        escuela: "Universidad Panamericana",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "becerrilp2002",
        descripcion: "Estudio Derecho en la Universidad Panamericana",
        likes: 2700
    },
    {
        nombre: "Marcelo Da Paz Leal",
        escuela: "Michigan State",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "dapazleal",
        descripcion: "Estudio Computer Science en Mich University",
        likes: 3500
    }
]

router.get('/', (request, response, next) => {
    response.render('lista', {usuarios: usuarios});
});

module.exports = router;