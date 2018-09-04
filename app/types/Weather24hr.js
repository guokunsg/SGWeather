// @flow

import { fetchWeather24Hours } from '../actions/WeatherAction24hr'
import { W24HR_STATE_INIT, W24HR_STATE_LOADING, W24HR_STATE_DATA_REFRESHED, W24HR_STATE_ERROR,
    } from '../reducers/Weather24hrReducer'
import type { NetworkAction } from './common'

/** 24 hours weather forecast action type */
export type W24HrAction = NetworkAction

/** Type of the action to fetch weather forecast */
export type W24HrFetch2Hours = typeof(fetchWeather24Hours)

/** State status type */
export type W24HrStateStatus = typeof W24HR_STATE_INIT | typeof W24HR_STATE_LOADING |
    typeof W24HR_STATE_DATA_REFRESHED | typeof W24HR_STATE_ERROR

/** Represents a single area weather forecast.  */
export type W24HrRegionForecast = {
    start: Date,
    end: Date,
    west: string,
    east: string,
    central: string,
    south: string,
    north: string,
}

/** Represents the data of entire weather forecast */
export type W24HrForecasts = {
    validFrom: Date,
    validTo: Date,
    humidity_low: string,
    humidity_high: string,
    temp_low: string,
    temp_high: string,
    wind_speed_low: string,
    wind_speed_hight: string,
    wind_direction: string,
    forecasts: Array<W24HrRegionForecast>
}

/** Redux state status for 24 hours weather forecast */
export type W24HrState = { status: typeof W24HR_STATE_INIT, data: null, error: null }
        | { status: typeof W24HR_STATE_LOADING, data: ?W24HrForecasts, error: null}
        | { status: typeof W24HR_STATE_DATA_REFRESHED, data: W24HrForecasts, error: null}
        | { status: typeof W24HR_STATE_ERROR, data: ?W24HrForecasts, error: Error }
