const Historia = require('../models/historias.model')

exports.get_nuevo = (request, response, next) => {
    response.render('/');
};

exports.post_nuevo = (request, response, next) => {
    const historia = new Historia({
        pp: request.body.pp,
        user: request.body.user,
    })

    historia.save()

    response.redirect('/');
};


exports.listar = (request, response, next) => {
    response.render('lista', {
        historias: Historia.fetchAll(),
    });
};
