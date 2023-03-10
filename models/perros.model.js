const db = require('../util/database');

const perros = [
    {
        nombre: "Duquesa",
        raza: "Beagle",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    {
        nombre: "Wilson",
        raza: "Golden",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    {
        nombre: "Spike",
        raza: "Husky",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    {
        nombre: "Chilakil",
        raza: "Chihuahua",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    {
        nombre: "Pugberto",
        raza: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }
];

module.exports = class Game {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_perro) {
        this.nombre = nuevo_perro.nombre  || 'Firulais';
        this.raza = nuevo_perro.raza  || 'Delmer';
        this.imagen = nuevo_perro.imagen  || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_perro.descripcion  || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        perros.push(this)

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static es metodo de la clase y no de la instancia
    static fetchAll() {
        return db.execute(`Select p.id, p.nombre, p.imagen, p.descripcion, p.created_at, r.nombre as raza
        FROM perros p, razas r
        Where p.idRaza = r.id
        `)
    }

}
// modelo es para datos
// controlador es para logica