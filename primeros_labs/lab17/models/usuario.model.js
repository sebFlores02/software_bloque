const db = require('../util/database');

const usuarios = [
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        nombre: "Benito Tagle",
        escuela: "Texas A&M",
        image: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        descripcion: "Estudio Ingenieria Mecanica en A&M",
        likes: 1200
    },
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        nombre: "Patricio Becerril",
        escuela: "Universidad Panamericana",
        image: "https://bulma.io/images/placeholders/1280x960.png",
        user: "becerrilp2002",
        descripcion: "Estudio Derecho en la Universidad Panamericana",
        likes: 2700
    },
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        nombre: "Marcelo Da Paz Leal",
        escuela: "Michigan State",
        image: "https://bulma.io/images/placeholders/1280x960.png",
        user: "dapazleal",
        descripcion: "Estudio Computer Science en Mich University",
        likes: 3500
    }
]

module.exports = class Game {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usuario) {
        this.pp = nuevo_usuario.pp  || 'https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png';
        this.nombre = nuevo_usuario.nombre  || 'Firulais';
        this.escuela = nuevo_usuario.escuela  || 'Tec';
        this.image = nuevo_usuario.image  || 'https://bulma.io/images/placeholders/1280x960.png';
        this.user = nuevo_usuario.user  || 'prueba02';
        this.descripcion = nuevo_usuario.descripcion  || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        usuarios.push(this)

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static es metodo de la clase y no de la instancia
    static fetchAll() {
        return db.execute(
            `SELECT * FROM usuarios
            `
        );
    }

}