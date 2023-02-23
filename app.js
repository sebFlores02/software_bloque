console.log("hola")

// fs es el modullo para trabajar con el sistema de archivos

const filesystem = require('fs')
filesystem.writeFileSync('hola.text', 'Hola desde node')

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50]

for(let item of arreglo){
    setTimeout(()=> console.log(item), item)
}

console.log("Este log esta despues de imprimir el arreglo")

//http es el modulo que permite crear un servidor que pueda atender peticiones http
const http = require('http')

const server = http.createServer( (request, response) => {
        console.log(request.url);
        // response.setHeader('Content-Type', 'text/html');
        // response.write("");
        // response.end()
    });

server.listen(3000)