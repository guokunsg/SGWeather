// @flow

import { fetchWeather2Hours } from '../actions/WeatherAction2hr'
import { W2HR_STATE_INIT, W2HR_STATE_LOADING, W2HR_STATE_DATA_REFRESHED, W2HR_STATE_ERROR,
    } from '../reducers/Weather2hrReducer'
import type { NetworkAction } from './common'

/** 2 hours weather forecast action type */
export type W2HrAction = NetworkAction

/** Type of the action to fetch weather forecast */
export type W2HrFetch2Hours = typeof(fetchWeather2Hours)

/** State status type */
export type W2HrStateStatus = typeof W2HR_STATE_INIT | typeof W2HR_STATE_LOADING |
    typeof W2HR_STATE_DATA_REFRESHED | typeof W2HR_STATE_ERROR

/** Represents a single area weather forecast.  */
export type W2HrForecastItem = {
    name: string,
    latitude: number,
    longitude: number,
    forecast: string,
}

/** Represents the data of entire weather forecast */
export type W2HrForecasts = {
    validFrom: Date,
    validTo: Date,
    forecasts: Array<W2HrForecastItem>
}

/** Redux state type for 2 hours weather forecast */
export type W2HrState = { status: typeof W2HR_STATE_INIT, data: null, error: null }
        | { status: typeof W2HR_STATE_LOADING, data: ?W2HrForecasts, error: null}
        | { status: typeof W2HR_STATE_DATA_REFRESHED, data: W2HrForecasts, error: null}
        | { status: typeof W2HR_STATE_ERROR, data: ?W2HrForecasts, error: Error }
