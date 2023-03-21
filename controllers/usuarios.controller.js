const Usuario = require('../models/usuarios.model');

exports.get_login = (request, response, next) => {
    response.render('login');
};

exports.post_login = (request, response, next) => {
    response.redirect('/perros');
};


exports.get_signup = (request, response, next) => {
    response.render('signup');
};

exports.post_signup = (request, response, next) => {
    const usuario = new Usuario({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });

    usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/usuarios/login');
    }).catch((error) => {console.log(error)});
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/perros'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.signup = (request, response, next) => {
    response.render('signup')
}
