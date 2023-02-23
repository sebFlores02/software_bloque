// ejercicio 1
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

// ejercicio 2

const ejercicio2 = (string) => {
    const filesystem = require('fs')
    filesystem.writeFileSync(`hola.text`, `${string}`)
}

let string = "bounjourno"

ejercicio2(string)


// ejercicio 3

