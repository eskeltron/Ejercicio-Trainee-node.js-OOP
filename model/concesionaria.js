const { Vehiculo } = require('./vehiculo');

class Concesionaria {
    vehiculos;

    constructor() {
        this.vehiculos = [];
    }

    /**
     * Returns vehicle more expensive.
     * If there are not vehicles returns null
     */

    getMoreExpensiveVehicle() {
        const vMoreExpensive = this.vehiculos.reduce((pv, cv) => pv.precio >= cv.precio ? pv : cv)
        return vMoreExpensive ? vMoreExpensive : null;
    }

    /**
     * Returns cheaper vehicle.
     * If there are not vehicles returns null
     */
    getCheaperVehicle() {
        const vCheaper = this.vehiculos.reduce((pv, cv) => pv.precio <= cv.precio ? pv : cv)
        return vCheaper ? vCheaper : null;
    }

    /**
     * 
     * @param {Vehiculo} vehiculo - Vehicle type
     */
    addVehicle(vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    /**
     * 
     * @param {string} letter - is a char
     * 
     * Returns the vehicles that contains the letter
     */
    getVehiclesThatContainTheLetter(letter) {
        return this.vehiculos.filter(v => v.modelo.includes(letter));
    }

    /**
     *  Returns Vehicle's array ordered by price highest to lower.
     */

    GetVehiclesByPriceFromHighestToLowest() {
        return this.vehiculos.sort((a, b) => b.precio - a.precio);
    }

    /**
     * Returns all vehicles.
     */
    getAllVehicles() {
        return this.vehiculos;
    }

};

module.exports = {
    Concesionaria
};