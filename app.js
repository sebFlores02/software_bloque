const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')

// llamar constructor de express
const app = express();

// creamos carpeta estatica para accesar html, css y js
// lo hacemos con la ruta /nombreHTML.html
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))

// configuramos ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

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

const rutasPerros = require('./routes/perros.routes')

app.use('/perros', rutasPerros)

const hockeyRutas = require('./routes/hockey.routes')

app.use('/hockey', hockeyRutas)

const rutasChilaquiles = require('./routes/chilaquiles.routes')
app.use('/chilaquiles', rutasChilaquiles)

app.use((request, response, next) => {
    console.log("Tercer middleware")

    response.status(404)
    // send() envia la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe')
})

// puerto 3000
app.listen(3000);