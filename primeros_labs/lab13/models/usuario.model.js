const usuarios = [
    {
        nombre: "Benito Tagle",
        escuela: "Texas A&M",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        descripcion: "Estudio Ingenieria Mecanica en A&M",
        likes: 1200
    },
    {
        nombre: "Patricio Becerril",
        escuela: "Universidad Panamericana",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "becerrilp2002",
        descripcion: "Estudio Derecho en la Universidad Panamericana",
        likes: 2700
    },
    {
        nombre: "Marcelo Da Paz Leal",
        escuela: "Michigan State",
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "dapazleal",
        descripcion: "Estudio Computer Science en Mich University",
        likes: 3500
    }
]

module.exports = class Game {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre  || 'Firulais';
        this.escuela = nuevo_usuario.escuela  || 'Tec';
        this.user = nuevo_usuario.user  || 'prueba02';
        this.pp = nuevo_usuario.pp  || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_usuario.descripcion  || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        usuarios.push(this)

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static es metodo de la clase y no de la instancia
    static fetchAll() {
        return usuarios
    }

}