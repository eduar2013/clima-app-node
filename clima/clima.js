const axios = require('axios');

const getClima = async(lat, lgn) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=80ddba50bb3d79849e98f4fe897f7bde&units=metric`);

    if (resp.data.cod === 401) {
        throw new Error("No fue posible obtener el clima");
    }

    return resp.data.main.temp;

}

module.exports = {

    getClima
}