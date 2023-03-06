const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use((request, response, next) => {
    console.log('Start!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/home', (request, response, next) => {
    let html = `
    <h1 style="text-align:center; font-size: 40px; margin-top:30px; padding: 70px;">Bienvenido a Web Dev RoadMap</h1>

    <div style=" display:flex; justify-content:space-between;">

        <div style=" min-height: 700px; flex-basis: calc(50%); background-color: #333; color: white;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Front End Dev</h3>
            <a href="./career/front" style="text-align: center; font-size:14px; color:white; "><p>Haz click para accesar info de Front</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png">

        </div>

        <div style=" min-height: 700px; flex-basis: calc(50%); background-color: #DEDEDE; color: #333;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Back End Dev</h3>
            <a href="./career/back" style="text-align: center; font-size:14px; color: #333; "><p>Haz click para accesar info de Back</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-4316118-3611968.png">

        </div>

    </div>
    `
    response.send(html)
})

const frontRutas = require('./routes/front.routes')
const backRutas = require('./routes/back.routes')
const signup = require('./routes/signup.routes')

app.use('/career', frontRutas)
app.use('/career', backRutas)
app.use('/career', signup)

app.use((request, response, next) => {
    console.log("Tercer middleware")
    response.status(404)
    // send() envia la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe')
})

// puerto 3000
app.listen(3001);