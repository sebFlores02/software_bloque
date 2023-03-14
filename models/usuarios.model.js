const db = require('../util/database')

module.exports = class Usuario {
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || `Sebastian`;
        this.username = nuevo_usuario.username || `seb.flores2002`;
        this.password = nuevo_usuario.password || `12345678`;
    }

    save() {
        return db.execute(`
        INSERT INTO usuarios (nombre, username, password)
        values (?, ?, ?)
        `, [this.nombre, this.username, this.password])
    }

    static fetchAll() {
        // return db.execute(`
        // SELECT *
        // FROM usuarios
        // `)
    }

}