const Perro = require('../models/perros.model')

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
    })

    perro.save()

    request.session.ultimo_perro = perro.nombre

    response.redirect('/perros/');
};


exports.listar = (request, response, next) => {

    let consultas = request.get('Cookie').split(';')[0].split('=')[1]

    consultas++;

    request.session.ultimo_perro

    Perro.fetchAll()

    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            razas: rows,
            ultimo_perro: request.session.ultimo_perro || ''
        });

    })

    .catch(err => {
        console.log(err);
    });
};
