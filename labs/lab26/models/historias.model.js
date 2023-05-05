const historias = [
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        user: "dapazleal",
    },
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        user: "dapazleal",
    },
    {
        pp: "https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        user: "dapazleal",
    }
]

module.exports = class Historias {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(historias) {
        this.pp = historias.pp  || 'https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png';
        this.user = historias.user  || 'prueba02';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        historias.push(this)

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static es metodo de la clase y no de la instancia
    static fetchAll() {
        return historias
    }

}