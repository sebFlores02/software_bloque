const express = require('express');

const router = express.Router();

router.get('/front', (request, response, next) => {
    console.log(request.body)
    console.log(request.body.jugador)

    let html = `

    <div style=" display: flex; justify-content: space-between; width: 90%; margin: 0 auto; padding: 70px 0; color: black;">

        <div style=" color:black; display: flex; justify-content:space-around; flex-basis: calc(30%); ">
            <a href="/home" style="text-align: center; font-size:14px; color: black; "><p>Home</p></a>
            <a href="/career/back" style="text-align: center; font-size:14px; color: black; "><p>Haz click para accesar info de Back</p></a>
        </div>

        <div style="flex-basis: calc(30%)">
            <h1 style=" font-size: 40px; ">Front End Dev RoadMap</h1>
        </div>

        <div style="flex-basis: calc(30%)">
            <a style="color: black; text-decoration: none;" href="/career/signup"><p>Convertirse en Miembro</p></a>
        </div>

    </div>

    <div style=" width:80%; margin:0 auto; display:flex; justify-content:space-between; margin-bottom: 15px;">

        <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #E44D27; color: white;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">HTML</h3>
            <a href="./career/front" style="text-align: center; font-size:14px; color:white; "><p>Ver mas cursos del tema</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png">

        </div>

        <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #0582C0; color: white;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">CSS</h3>
            <a href="./career/front" style="text-align: center; font-size:14px; color: white; "><p>Ver mas cursos del tema</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-4316118-3611968.png">

        </div>

    </div>

    <div style=" width:80%; margin:0 auto; display:flex; justify-content:space-between;">

        <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #007C02; color: white;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">FrameWorks</h3>
            <a href="./career/front" style="text-align: center; font-size:14px; color: white; "><p>Ver mas cursos del tema</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/back-end-developer-4316118-3611968.png">

        </div>

        <div style=" min-height: 700px; flex-basis: calc(50% - 10px); background-color: #CAB618; color: white;">

            <h3 style="text-align: center; margin-top:140px; font-size: 40px ">Java Script</h3>
            <a href="./career/front" style="text-align: center; font-size:14px; color:white; "><p>Ver mas cursos del tema</p></a>
            <img style="width: 400px; display: block; margin: 0 auto;" src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png">

        </div>

    </div>
    `
    response.send(html)
})



module.exports = router;