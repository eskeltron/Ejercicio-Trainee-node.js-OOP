class Vehiculo {
    marca;
    modelo;
    precio;

    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    toString() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo}`;
    }
}

module.exports = {
    Vehiculo
};