/**
 * Returns the local image source for the input weather forecast text.
 * Return null if the text is not recognized
 * @param {String} weather
 */
export default function getWeatherImageSource(weather: string) {
    // require in Image only accepts string literals, no variable
    /* eslint-disable global-require */
    switch (weather) {
        case 'Cloudy':
            return require('../images/cloudy.png')
        case 'Partly Cloudy (Day)':
            return require('../images/cloudy_partial.png')
        case 'Partly Cloudy (Night)':
            return require('../images/cloudy_night.png')
        case 'Moderate Rain':
            return require('../images/rain.png')
        case 'Light Rain':
            return require('../images/rain.png')
        case 'Light Showers':
            return require('../images/rain_heavy.png')
        case 'Showers':
            return require('../images/rain_heavy.png')
        case 'Thundery Showers':
            return require('../images/storm.png')
        default:
            return null
    }
}
