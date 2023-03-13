const Perro = require('../models/perros.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: 1,//request.body.raza,
        descripcion: request.body.descripcion,
    });

    perro.save()
    .then(([rows, fieldData]) => {
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

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    Perro.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            razas: rows,
            ultimo_perro: request.session.ultimo_perro || '',
        });
    })
    .catch(err => {
        console.log(err);
    });


};
