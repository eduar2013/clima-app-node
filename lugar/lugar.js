const axios = require('axios');

const getLugar = async(direccion) => {


    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontro informacion para la direccion ${direccion}`);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lgn: location.geometry.location.lng
    }

}

module.exports = {
    getLugar
}