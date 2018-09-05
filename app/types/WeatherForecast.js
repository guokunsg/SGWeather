// @flow

import { fetchWeather2Hr } from '../actions/WeatherAction2hr'
import { fetchWeather24Hr } from '../actions/WeatherAction24hr'
import { NetworkStoreStatusInit, NetworkStoreStatusLoading, NetworkStoreStatusDataUpdated,
        NetworkStoreStatusError } from './NetworkActionStore'
import type { NetworkAction } from './NetworkActionStore'

/** Weather forecast action type */
export type WeatherAction2Hr = NetworkAction
export type WeatherAction24Hr = NetworkAction

/** Type of the action to fetch weather forecast */
export type FetchWeather2Hr = typeof(fetchWeather2Hr)
export type FetchWeather24Hr = typeof(fetchWeather24Hr)

/** Represents a single area weather forecast. */
export type LocationForecast = {
    name: string,
    latitude: number,
    longitude: number,
    forecast: string,
}

/** Weather forecast period. */
export type ForecastPeriod = {
    validFrom: Date,
    validTo: Date,
}

/** Represents the data of a weather forecast */
export type WeatherForecast = ForecastPeriod & {
    forecasts: Array<LocationForecast>
}

/** A detailed weather forecast. */
export type WeatherForecastDetailed = ForecastPeriod & {
    humidityLow: string,
    humidityHigh: string,
    tempLow: string,
    tempHigh: string,
    windSpeedLow: string,
    windSpeedHigh: string,
    windDirection: string,
    generalForecast: string,
    periodForecasts: Array<WeatherForecast>
}

/** Redux state status for 2 hours weather forecast */
export type WeatherState2Hr = { status: typeof NetworkStoreStatusInit, data: null, error: null }
        | { status: typeof NetworkStoreStatusLoading, data: ?WeatherForecast, error: null}
        | { status: typeof NetworkStoreStatusDataUpdated, data: WeatherForecast, error: null}
        | { status: typeof NetworkStoreStatusError, data: ?WeatherForecast, error: Error }
export type WeatherState24Hr = { status: typeof NetworkStoreStatusInit, data: null, error: null }
        | { status: typeof NetworkStoreStatusLoading, data: ?WeatherForecastDetailed, error: null}
        | { status: typeof NetworkStoreStatusDataUpdated, data: WeatherForecastDetailed, error: null}
        | { status: typeof NetworkStoreStatusError, data: ?WeatherForecastDetailed, error: Error }
