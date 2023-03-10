const Usuario = require('../models/usuario.model')

exports.get_nuevo = (request, response, next) => {
    response.render('/');
};

exports.post_nuevo = (request, response, next) => {

    const usuario = new Usuario({
        nombre: request.body.nombre,
        escuela: request.body.escuela,
        user: request.body.user,
        descripcion: request.body.descripcion,
    })

    usuario.save()

    request.session.ultimo_usuario = usuario.nombre

    response.redirect('/');
};


exports.listar = (request, response, next) => {

    let consultas = request.get('Cookie').split(';')[0].split('=')[1]

    consultas++;

    const ultimo_usuario = request.session?.ultimo_usuario || '';

    response.render('lista', {
        usuarios: Usuario.fetchAll(),
        ultimo_usuario,
    });

};

