const Usuario = require('../models/usuario.model')

exports.get_nuevo = (request, response, next) => {
    Usuario.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('nuevo', {
            usuarios: rows,
        });
    })
    .catch(error => {
        console.log(error)
    })
    // response.render('nuevo');
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
    .then(([rows, fieldData]) => {
        request.session.mensaje = "El usuario "

        request.session.ultimo_usuario = usuario.nombre
        response.redirect('/home/');
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

    Usuario.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            usuarios: rows,
            ultimo_usuario: request.session.ultimo_usuario || '',
            mensaje: mensaje,
        });
    })
    .catch(err => {
        console.log(err);
    });

};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};


