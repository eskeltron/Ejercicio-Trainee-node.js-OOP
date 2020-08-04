const { Vehiculo } = require("./vehiculo");

class Moto extends Vehiculo {
    cilindrada;

    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
    }


    toString() {
        return `${super.toString()} // Cilindrada: ${this.cilindrada} // Precio: ${this.precio}`
    }
}

module.exports = {
    Moto
};