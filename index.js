const { Concesionaria } = require('./model/concesionaria');
const { Auto } = require('./model/auto');
const { Moto } = require('./model/moto');

const autoUno = new Auto('Peugeot', '206', 200000.00, 4);
const autoDos = new Auto('Peugeot', '208', 250000.00, 5);
const motoUno = new Moto('Honda', 'Titan', 60000.00, '125c');
const motoDos = new Moto('Yamaha', 'YBR', 80500.50, '160c');
const motoTres = new Moto('Yamaha', 'Y', 80500.55, '166c');

const concesionaria = new Concesionaria();

concesionaria.addVehicle(motoUno);
concesionaria.addVehicle(motoDos);
concesionaria.addVehicle(motoTres);
concesionaria.addVehicle(autoUno);
concesionaria.addVehicle(autoDos);

console.log('\n\n************************************************************');
console.log('*Autor:Nicolás Gomez, contacto: nicolas_gomez09@hotmail.com*');
console.log('************************************************************\n\n');

let vMExpensive = concesionaria.getMoreExpensiveVehicle();
console.log(`Vehiculo más caro: ${vMExpensive ? vMExpensive.marca + ' ' + vMExpensive.modelo : null}\n\n`);

let vCheaper = concesionaria.getCheaperVehicle();
console.log(`Vehiculo más barato: ${vCheaper ? vCheaper.marca + ' ' + vCheaper.modelo : null}\n\n`);

console.log(`Vehículo(s) que contiene(s) en el modelo la letra Y:`);
for (const vehicle of concesionaria.getVehiclesThatContainTheLetter('Y')) {
    console.log(vehicle.marca, vehicle.modelo, vehicle.precio);
}

console.log('\n\nVehiculos ordenados por precio de mayor a menor:');
for (const vehicle of concesionaria.GetVehiclesByPriceFromHighestToLowest()) {
    console.log(vehicle.marca, vehicle.modelo);
}