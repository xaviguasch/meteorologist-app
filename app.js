const request = require('request')


const url = 'https://api.darksky.net/forecast/463eac0b14ffa688377d10e96e63a6c0/37.8267,-122.4233'

// request({
//     url: url,
//     json: true
// }, (err, response) => {
//     const data = response.body.currently

//     console.log(`${response.body.daily.data[0].summary} 
//     It is currently ${data.temperature} degrees out. 
//     There is a ${data.precipProbability}% chance of rain.`);
// })



const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGF2aWd1YXNjaCIsImEiOiJjanQ3Z3RmemwwM242M3ltdXNqbXV6c293In0.8B6svz5cw2-2vOOgWgaebg&limit=1'


request({
    url: mapboxUrl,
    json: true
}, (err, response) => {

    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]

    console.log(latitude);
    console.log(longitude);


})