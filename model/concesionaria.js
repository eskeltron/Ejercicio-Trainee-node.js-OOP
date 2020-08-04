const { Vehiculo } = require('./vehiculo');

class Concesionaria {
    vehiculos = [];

    constructor() {
        this.vehiculos = [];
    }

    /**
     * Return vehicle more expensive.
     * If there is not vehicles return null
     */

    getMoreExpensiveVehicle() {
        const vMoreExpensive = this.vehiculos.reduce((pv, cv) => pv.precio >= cv.precio ? pv : cv)
        return vMoreExpensive ? vMoreExpensive : null;
    }

    /**
     * Return vehicle cheaper.
     * If there is not vehicles return null
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
     * Return the vehicles that contain the letter
     */
    getVehiclesThatContainTheLetter(letter) {
        return this.vehiculos.filter(v => (v.marca.includes(letter) || v.modelo.includes(letter)));
    }

    /**
     *  Return Vehicle's array order by price highest to lower.
     */

    GetVehiclesByPriceFromHighestToLowest() {
        return this.vehiculos.sort((a, b) => b.precio - a.precio);
    }

};

module.exports = {
    Concesionaria
};