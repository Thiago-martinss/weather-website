const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c86a84cfbd57b7484ff442e0491f51dd/' + latitude + ',' + longitude + '?units=si&lang=pt'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'Temperatura atual ' + body.currently.temperature + ' Graus Celsius. Chance de chuva ' + body.currently.precipProbability + '%')
        }
    })
}

module.exports = forecast