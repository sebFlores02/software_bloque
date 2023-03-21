const Perro = require('../models/perros.model');
const Raza = require('../models/razas.model');

exports.get_nuevo = (request, response, next) => {
    Raza.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('nuevo', {
            razas: rows,
        });
    })
    .catch(error => {
        console.log(error)
    })
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
    });

    perro.save()
    .then(([rows, fieldData]) => {
        request.session.mensaje = "EL perro "

        request.session.ultimo_perro = perro.nombre;
        response.redirect('/perros/');
    })
    .catch(error => {
        console.log(error)
    })

};

exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    let mensaje = ''

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    // if (request.session.mensaje) {
    //     mensaje.request.session.mensaje
    //     request.session.mensaje = ''
    // }

    Perro.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            razas: rows,
            ultimo_perro: request.session.ultimo_perro || '',
            mensaje: mensaje,
        });
    })
    .catch(err => {
        console.log(err);
    });


};
