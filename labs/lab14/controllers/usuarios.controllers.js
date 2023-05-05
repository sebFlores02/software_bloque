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

    request.session.ultimo_usuario = usuario.nombre

    response.redirect('/home/');
};


exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('lista', {
        usuarios: Usuario.fetchAll(),
        ultimo_usuario: request.session.ultimo_usuario || ''
    });

};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};


