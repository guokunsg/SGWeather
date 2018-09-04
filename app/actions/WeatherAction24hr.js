// @flow

import type { Dispatch as ReduxDispatch } from 'redux'
import config from '../AppConfig'

import { fetchData } from './NetworkAction'

// 2 hours weather forecast action type allowed values
export const W24HrActionTypes = {
    Start: 'w24hr_action_starting',
    DataReady: 'w24hr_action_data_ready',
    Error: 'w24hr_action_error',
}

/** Fetch the wether forecast data from server */
export const fetchWeather24Hours = () => (dispatch: ReduxDispatch) => {
        fetchData(config.URL_WEATHER_FORECAST_24_HOURS, dispatch, W24HrActionTypes)
    }

export default fetchWeather24Hours
