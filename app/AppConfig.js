// @flow

import Immutable from 'seamless-immutable'

export const AppConfig = Immutable({
    urlWeatherForecast2Hr: 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast',
    urlWeatherForecast24Hr: 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast',
    urlWeatherForecast4Days: 'https://api.data.gov.sg/v1/environment/4-day-weather-forecast',

    // Real-time weather readings
    urlWeatherRealTemperature: 'https://api.data.gov.sg/v1/environment/air-temperature',
    urlWeatherRealRainfall: 'https://api.data.gov.sg/v1/environment/rainfall',
    urlWeatherRealHumidity: 'https://api.data.gov.sg/v1/environment/relative-humidity',
    urlWeatherRealWindDirection: 'https://api.data.gov.sg/v1/environment/wind-direction',
    urlWeatherRealWindSpeed: 'https://api.data.gov.sg/v1/environment/wind-speed',

    urlUvi: 'https://api.data.gov.sg/v1/environment/uv-index',
    urlPm25: 'https://api.data.gov.sg/v1/environment/pm25',
    urlPsi: 'https://api.data.gov.sg/v1/environment/psi',

    /** The default Singapore region to be shown in the map. */
    mapDefaultRegion: {
        latitude: 1.327,
        longitude: 103.826,
        latitudeDelta: 0.25,
        longitudeDelta: 0.25,
    },

    /** Area locations. */
    locationWest: { latitude: 1.35735, longitude: 103.7 },
    locationEast: { latitude: 1.35735, longitude: 103.94 },
    locationCentral: { latitude: 1.35735, longitude: 103.82 },
    locationSouth: { latitude: 1.29587, longitude: 103.82 },
    locationNorth: { latitude: 1.41803, longitude: 103.82 },
})

export default AppConfig
