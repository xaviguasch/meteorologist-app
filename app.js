const geocode = require('./utils/geocode')


// const url = 'https://api.darksky.net/forecast/463eac0b14ffa688377d10e96e63a6c0/37.8267,-122.4233'

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location');

//     } else {
//         console.log(`${response.body.daily.data[0].summary} 
//         It is currently ${response.body.currently.temperature} degrees out. 
//         There is a ${response.body.currently.precipProbability}% chance of rain.`);
//     }
// })







// GEOCODING

// const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Barcelona.json?access_token=pk.eyJ1IjoieGF2aWd1YXNjaCIsImEiOiJjanQ3Z3RmemwwM242M3ltdXNqbXV6c293In0.8B6svz5cw2-2vOOgWgaebg&limit=1'


// request({
//     url: mapboxUrl,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to mapbox location services');
//     } else if (!response.body.features) {
//         console.log('There are no matching results for your location, try another search term');
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]

//         console.log(longitude, latitude);
//     }
// })





geocode('Barcelona', (error, data) => {

    console.log('Error', error);
    console.log('Data', data);


})