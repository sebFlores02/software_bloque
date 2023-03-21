const http = require('http')
let fs = require(`fs`)
const path = require('path');

const server = http.createServer( (request, response) => {

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write(`<h1 style="color:#333; text-size:20px; text-align:center">Bienvenido Usuario</h1>`)
        response.write(`<div style="display:flex; justify-content: space-around;">`)

            response.write(`<div style="flex-basis: calc(50%);">`)
                response.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, elit iaculis vulputate cursus, ante mauris cursus orci, sed imperdiet nisl felis quis eros. Sed facilisis ipsum in massa posuere, sed varius libero pretium. Aliquam erat volutpat. Nam id iaculis leo. Praesent suscipit ultrices dolor, eu sodales nulla. Nunc ut metus eu elit molestie molestie et eu est. Praesent eros ex, feugiat a tortor a, interdum laoreet nulla.</p>`)
                response.write(`<p>Curabitur at nulla sit amet ante convallis sollicitudin. Integer fringilla eros malesuada neque maximus, ut bibendum elit gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id nisl odio. Vivamus mollis turpis id est finibus facilisis. In eleifend ornare vulputate. Quisque iaculis mi dictum enim tristique, ut sodales lorem blandit. Donec posuere id lacus a congue. Sed ultrices dictum pellentesque. Cras nibh elit, volutpat tempor hendrerit sed, pulvinar tristique nunc. Pellentesque ut faucibus mauris, non fringilla nisl. Fusce sodales enim dui, id congue lorem egestas quis. Suspendisse augue augue, sollicitudin sit amet lectus et, mollis vehicula diam. Praesent sed arcu vitae est dictum lacinia nec vel nunc.</p>`)
            response.write(`</div>`)

            response.write(`<div>`)
                response.write('<img style="width:100%; height:600px;" alt="chilaquiles verdes" src="https://i.pinimg.com/736x/9a/c3/2b/9ac32b9b26902dc6708d835d6b8d0954.jpg">')
                response.write(`<a href="/login"><button style="padding:15px 10px;  border:none; background-color:orange;">Iniciar Sesion</button></a>`)
            response.write(`</div>`)
        response.write(`</div>`)
        response.end();
    }

    else if (request.url === "/login" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write(`<form action="/login" method="POST">`)
            response.write(`<label for="usuario">Nombre del usuario</label>`)
            response.write(`<input type="text" id="usuario" name="usuario"><br>`)
            response.write(`<label for="contrasena">Contrasena</label>`)
            response.write(`<input type="password" id="password" name="contrasena">`)
            response.write(`<input type="submit" value="Enviar">`)
        response.write(`</form>`)
        response.write('</body></html>');
        response.end();
    }

    else if (request.url === "/login" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html>');
            response.write('<head><meta charset="utf-8">');
                response.write(`<style type="text/css">
                body {
                    font-family: Arial, sans-serif;
                    background-color: #F2F2F2;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #FFFFFF;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.2);
                }
                .heading {
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                input[type="text"], input[type="email"], textarea {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #CCCCCC;
                    border-radius: 5px;
                    box-sizing: border-box;
                    margin-bottom: 10px;
                    font-size: 16px;
                }
                input[type="submit"] {
                    background-color: #4CAF50;
                    color: #FFFFFF;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                }
                </style>`)

                response.write(`<div>`)
                    response.write(`<div class="heading">Regístrate</div>
                    <form>
                        <div class="form-group">
                            <label for="nombre">Nombre completo:</label>
                            <input type="text" id="nombre" name="nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="correo">Correo electrónico:</label>
                            <input type="email" id="correo" name="correo" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <div class="form-group">
                            <label for="bio">Biografía:</label>
                            <textarea id="bio" name="bio"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Registrarse">
                        </div>
                    </form>`)
                response.write(`</div>`)
            response.write(`</head><body>`)
            response.write('</body></html>');
            response.end();
        });
    }

    else {

        response.statusCode = 404
        response.write(`<p>Lo sentimos esos chilaquiles no los tenemos</p>`)
        response.write(`<a href="/">Volver<a>`)
        response.end()

    }

    });

server.listen(3001)

