const Usuario = require('../models/usuario.model')

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const usuario = new Usuario({
        pp: request.body.pp,
        nombre: request.body.nombre,
        escuela: request.body.escuela,
        image: request.body.image,
        user: request.body.user,
        descripcion: request.body.descripcion,
        likes: request.body.likes,
    })

    usuario.save()

    response.redirect('/home/');
};


exports.listar = (request, response, next) => {

    response.render('lista', {
        usuarios: Usuario.fetchAll(),
    });

};

