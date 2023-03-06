const Perro = require('../models/perros.model')

exports.listar = (request, response, next) => {
    response.render('lista', {razas: Perro.fetchAll()});
};