const filesystem = require('fs');
const http = require('http');
const path = require('path');

//ejercicio 1
const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50]

const ejercicio1 = (arreglo) => {
    let suma = 0
    for(let item of arreglo){
        suma += item;
        console.log(suma)
    }
    let resultado = suma / arreglo.length;
    console.log(`El promedio es ${resultado}`)
}

ejercicio1(arreglo)

//ejercicio 2

const ejercicio2 = (string) => {
    const filesystem = require('fs')
    filesystem.writeFileSync(`hola.text`, `${string}`)
}

let string = "bounjourno"

ejercicio2(string)


// ejercicio 3

const n = 5

let numbers = [4, 2, 5, 1]

const missingNumber = (n, numbers) => {
    let respuesta = numbers.sort((a, b) => a - b)
    console.log(respuesta)

    for (let i = 0; i < numbers.length; i++) {
        if (respuesta[i] + 1 !== respuesta[i + 1] && respuesta[i] < n) {
            console.log(`El numero faltante es: ${respuesta[i] + 1}`)
        }
    }
}

missingNumber(n, numbers)

const server = http.createServer((request, response) => {
  let filePath = './lab6' + request.url;
  if (filePath == './lab6/') filePath = './lab6/index.html';
  let extension = path.extname(filePath);
  let contentType;

  switch (extension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  filesystem.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Algo hiciste mal');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data, 'utf-8');
      response.end();
    }
  });
});

server.listen(8000);