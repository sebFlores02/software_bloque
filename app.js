console.log("hola")

// fs es el modullo para trabajar con el sistema de archivos

const filesystem = require('fs')
filesystem.writeFileSync('hola.text', 'Hola desde node')

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50]

for(let item of arreglo){
    setTimeout(()=> console.log(item), item)
}

console.log("Este log esta despues de imprimir el arreglo")

