const request = require('request')


const url = 'https://api.darksky.net/forecast/463eac0b14ffa688377d10e96e63a6c0/37.8267,-122.4233?lang=es'

request({
    url: url,
    json: true
}, (err, response) => {
    const data = response.body.currently

    console.log(`
    ${response.body.daily.data[0].summary} 
    It is currently ${data.temperature} degrees out. 
    There is a ${data.precipProbability}% chance of rain.`);
})