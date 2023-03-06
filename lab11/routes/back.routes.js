const express = require('express');

const router = express.Router();

router.get('/back', (request, response, next) => {
    console.log(request.body)
    console.log(request.body.jugador)

    let html = `
    <body style="background-color: #333">

    <div style=" display: flex; justify-content: space-between; width: 90%; margin: 0 auto; padding: 70px 0; color: white;">

        <div style=" display: flex; flex-basis: calc(30%)">
            <a href="/home" style="text-align: center; font-size:14px; color: white; "><p>Home</p></a>
            <a href="/career/front" style="text-align: center; font-size:14px; color: white; "><p>Haz click para accesar info de Back</p></a>
        </div>

        <div style="flex-basis: calc(30%)">
            <h1 style=" font-size: 40px; ">Front End Dev RoadMap</h1>
        </div>

        <div style="flex-basis: calc(30%)">
            <p>Convertirse en Miembro</p>
        </div>

    </div>


        <div style=" width:80%; margin:0 auto; display:flex; justify-content:space-between; margin-bottom: 15px;">

            <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #E44D27; color: white;">

                <h3 style="text-align: center; margin-top:140px; font-size: 40px ">PHP</h3>
                <a href="./career/front" style="text-align: center; font-size:14px; color:white; "><p>Ver mas cursos del tema</p></a>
                <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png">

            </div>

            <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #0582C0; color: white;">

                <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Java</h3>
                <a href="./career/front" style="text-align: center; font-size:14px; color: white; "><p>Ver mas cursos del tema</p></a>
                <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-4316118-3611968.png">

            </div>

        </div>

        <div style=" width:80%; margin:0 auto; display:flex; justify-content:space-between;">

            <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #007C02; color: white;">

                <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Python</h3>
                <a href="./career/front" style="text-align: center; font-size:14px; color: white; "><p>Ver mas cursos del tema</p></a>
                <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-4316118-3611968.png">

            </div>

            <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #CAB618; color: white;">

                <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Ruby</h3>
                <a href="./career/front" style="text-align: center; font-size:14px; color:white; "><p>Ver mas cursos del tema</p></a>
                <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png">

            </div>

        </div>
    </body>
    `
    response.send(html)
})

router.post('/back', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send(`El jugador es: ${request.body.jugador}`);
});

module.exports = router;