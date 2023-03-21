const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get('/signup', (request, response, next) => {
    let html = `
    <div>
        <form action="/career/signup" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <input type="submit" value="Enviar">
        </form>
    </div>
    `
    response.send(html)
})

router.post('/signup', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.name);
    console.log(request.body.email);
    response.send(`El jugador es: ${request.body.name}<br>
    El correo electrónico es: ${request.body.email}`);
});

module.exports = router;
