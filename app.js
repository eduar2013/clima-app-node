const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'descripcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lgn);

        return `La temperatura en ${coors.direccion} es de ${temp} °C`;
    } catch (e) {
        return `No se pudo determinar la temperatura hola cambio desde rama para ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));