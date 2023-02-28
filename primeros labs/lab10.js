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
        let filepath = `./` + request.url
        if(filepath === `./`){
            filepath = `./lab10.html`
        }

        let extName = path.extname(filepath)
        let contentType

        switch(extName){
            case `.js`:
                contentType = `text/javascript`
                break;
            case '.css':
                contentType = `text/css`
                break;
            default:
                contentType = `text/html`
                break;
        }

        fs.readFile(filepath, null, function (error, data) {
          if (error) {
            response.writeHead(404);
            response.write('Estas bien mal');
          } else {
            response.setHeader('Content-Type', contentType);
            response.write(data);
          }
          response.end();
        });
      }

     else if (request.url === "/ordenar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const tipo_chilaquiles = datos_completos.split('&')[0].split('=')[1];
            console.log(tipo_chilaquiles);

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



