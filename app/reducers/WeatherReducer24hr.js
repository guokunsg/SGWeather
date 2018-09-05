// @flow

import { WeatherActionTypes24Hr } from '../actions/WeatherAction24hr'
import type { WeatherAction24Hr, WeatherState24Hr, WeatherForecastDetailed } from '../types/WeatherForecast'
import networkReducer from './NetworkReducer'
import appConfig from '../AppConfig'

const initState = {
    status: 'NetworkStoreStatusInit',
    data: null,
    error: null,
}

/**
 * Convert server data to local data
 * @param {object} serverData
 */
function convertData(serverData: any) : WeatherForecastDetailed {
    const data = serverData.items[0]
    const detailedForecast = {
        validFrom: new Date(data.valid_period.start),
        validTo: new Date(data.valid_period.end),
        humidityLow: data.general.relative_humidity.low,
        humidityHigh: data.general.relative_humidity.high,
        tempLow: data.general.temperature.low,
        tempHigh: data.general.temperature.high,
        windSpeedLow: data.general.wind.speed.low,
        windSpeedHigh: data.general.wind.speed.high,
        windDirection: data.general.wind.direction,
        generalForecast: data.general.forecast,
        periodForecasts: [],
    }
    data.periods.forEach((item) => {
        const forecast = {
            validFrom: new Date(item.time.start),
            validTo: new Date(item.time.end),
            forecasts: [],
        }
        forecast.forecasts.push({ name: 'west', ...appConfig.locationWest, forecast: item.regions.west })
        forecast.forecasts.push({ name: 'east', ...appConfig.locationEast, forecast: item.regions.east })
        forecast.forecasts.push({ name: 'central', ...appConfig.locationCentral, forecast: item.regions.central })
        forecast.forecasts.push({ name: 'south', ...appConfig.locationSouth, forecast: item.regions.south })
        forecast.forecasts.push({ name: 'north', ...appConfig.locationNorth, forecast: item.regions.north })
        detailedForecast.periodForecasts.push(forecast)
    })
    return detailedForecast
}

const reducer = (state: WeatherState24Hr = initState,
    action: WeatherAction24Hr) => networkReducer(state, action, convertData, WeatherActionTypes24Hr)

export default reducer
