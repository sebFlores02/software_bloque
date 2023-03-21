const db = require('../util/database')
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || `Sebastian`;
        this.username = nuevo_usuario.username || `seb.flores2002`;
        this.password = nuevo_usuario.password || `12345678`;
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, username, password)
            values (?, ?, ?)
            `, [this.nombre, this.username, password_cifrado]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username){
        return db.execute(`
            SELECT nombre
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }

}