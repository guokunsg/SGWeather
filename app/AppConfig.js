// @flow

export const AppConfig = {
    URL_WEATHER_FORECAST_2_HOURS: 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast',

    URL_WEATHER_FORECAST_24_HOURS: 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast',

    URL_WEATHER_FORECAST_4_DAYS: 'https://api.data.gov.sg/v1/environment/4-day-weather-forecast',

    // Real-time weather readings
    URL_WEATHER_REAL_TEMPERATURE: 'https://api.data.gov.sg/v1/environment/air-temperature',
    URL_WEATHER_REAL_RAINFALL: 'https://api.data.gov.sg/v1/environment/rainfall',
    URL_WEATHER_REAL_HUMIDITY: 'https://api.data.gov.sg/v1/environment/relative-humidity',
    URL_WEATHER_REAL_WIND_DIRECTION: 'https://api.data.gov.sg/v1/environment/wind-direction',
    URL_WEATHER_REAL_WIND_SPEED: 'https://api.data.gov.sg/v1/environment/wind-speed',

    URL_UVI: 'https://api.data.gov.sg/v1/environment/uv-index',

    URL_PM_25: 'https://api.data.gov.sg/v1/environment/pm25',

    URL_PSI: 'https://api.data.gov.sg/v1/environment/psi',

    /**
     * The default Singapore region to be shown in the map
     */
    MAP_DEFAULT_REGION: {
        latitude: 1.327,
        longitude: 103.826,
        latitudeDelta: 0.25,
        longitudeDelta: 0.25,
    },
}

export default AppConfig
