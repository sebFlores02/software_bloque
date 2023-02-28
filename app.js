const bodyParser = require('body-parser');
const express = require('express');
// llamar constructor de express
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

// los cambios en Middleware se aplican en toda la aplicacion
// registramos middleware con use, recibe como parametro un apuntador a otra funcion
// se requieren 3 variable: request, response y next(nos dice que avanzemos al siguiente middleware)
// va de arriba hacia abajo
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta hola')
})

const hockeyRutas = require('./routes/hockey.routes')

app.use('/hockey', hockeyRutas)

app.use((request, response, next) => {
    console.log("Tercer middleware")

    response.status(404)
    // send() envia la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe')
})

// puerto 3000
app.listen(3000);