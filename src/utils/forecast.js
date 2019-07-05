const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c86a84cfbd57b7484ff442e0491f51dd/' + latitude + ',' + longitude + '?units=si&lang=pt'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Não foi possivel connectar com a applicação de temperatura', undefined)
        } else if (body.error) {
            callback('Não foi possivel encontrar o local', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + 'Temperatura atual é ' + body.currently.temperature + ' Graus Celsius. A temperatura maxima hoje pode chegar até ' + body.daily.data[0].temperatureHigh + ' Graus Celsius e a minima é ' + body.daily.data[0].temperatureLow + ' Graus Celsius, Chance de chuva ' + body.currently.precipProbability + ' % ')
        }
    })
}

module.exports = forecast