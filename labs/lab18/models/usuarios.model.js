const db = require('../util/database');

module.exports = class Game {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usuario) {
        this.profile_pic = nuevo_usuario.profile_pic  || 'https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png';
        this.nombre = nuevo_usuario.nombre  || 'Firulais';
        this.escuela = nuevo_usuario.escuela  || 'Tec';
        this.image = nuevo_usuario.image  || 'https://bulma.io/images/placeholders/1280x960.png';
        this.user = nuevo_usuario.user  || 'prueba02';
        this.descripcion = nuevo_usuario.descripcion  || 'Un perro muy cool';
        this.likes = nuevo_usuario.likes  || 5000;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute(`
        INSERT INTO usuarios (profile_pic, nombre, escuela, image, user, descripcion, likes)
        values(?, ?, ?, ?, ?, ?, ?)
        `, [this.profile_pic, this.nombre, this.escuela, this.image, this.user, this.descripcion, this.likes]);
        // usuarios.push(this)
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static es metodo de la clase y no de la instancia
    static fetchAll() {
        return db.execute(
            `SELECT id, profile_pic, nombre, escuela, image, user, descripcion, likes
            FROM usuarios
            `
        );
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT * FROM usuarios
            WHERE id = ?
            `,[id]
        );
    }

    static fetch(id) {
        if (id) {
            return Game.fetchOne(id)
        }
        else {
            return Game.fetchAll()
        }
    }

}