console.log("hola")

// fs es el modullo para trabajar con el sistema de archivos

const filesystem = require('fs')
filesystem.writeFileSync('hola.text', 'Hola desde node')


console.log("Este log esta despues de imprimir el arreglo")

// http es el modulo que permite crear un servidor que pueda atender peticiones http
const http = require('http')

const server = http.createServer( (request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>Wenas</h1>`);
        response.write("bounjourno");
        response.end()
    });

server.listen(3000)
