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

    response.redirect('/');
};


exports.listar = (request, response, next) => {

    response.render('lista', {
        usuarios: Usuario.fetchAll(),
    });

};

