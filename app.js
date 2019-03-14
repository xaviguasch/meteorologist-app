const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Barcelona', (error, data) => {
    if (error) {
        return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })

})