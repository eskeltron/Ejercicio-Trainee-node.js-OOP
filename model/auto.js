const { Vehiculo } = require("./vehiculo");

class Auto extends Vehiculo {
    puertas;

    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio)
        this.puertas = puertas;
    }


    toString() {
        return `${super.toString()} // Puertas: ${this.puertas} // Precio: ${this.precio}`
    }
}

module.exports = {
    Auto
};