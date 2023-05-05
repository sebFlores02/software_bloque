const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')
const session = require('express-session')

// llamar constructor de express
const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))

// configuramos ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

// const login = require('./routes/login.routes')
// app.use('/', login)

const home = require('./routes/usuarios.routes')
app.use('/home', home)

const login = require('./routes/login.routes')
app.use('/', login)


app.use((request, response, next) => {
    response.status(404)
    // send() envia la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe')
})

// puerto 3000
app.listen(3000);