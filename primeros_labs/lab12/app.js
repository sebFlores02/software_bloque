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

const rutasUsuarios = require('./routes/usuarios.routes')
app.use('/', rutasUsuarios)

app.use((request, response, next) => {
    response.status(404)
    // send() envia la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe')
})

// puerto 3000
app.listen(3000);