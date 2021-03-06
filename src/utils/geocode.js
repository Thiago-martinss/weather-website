const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFpZ29kIiwiYSI6ImNqeGR5ZGIyNjBqY3Mzb3BremhxNnc0cDUifQ.UBDRv59AIUi9tIgpbSzRgw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Não foi possivel conectar-se ao servidor!', undefined)
            console.log(response)
        } else if (body.features.length === 0) {
            callback('Não foi possivel encontrar o local, tente novamente', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode