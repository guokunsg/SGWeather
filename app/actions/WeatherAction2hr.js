// @flow

import type { Dispatch as ReduxDispatch } from 'redux'
import config from '../AppConfig'

import { fetchData } from './NetworkAction'

// 2 hours weather forecast action type allowed values
export const W2HrActionTypes = {
    Start: 'w2hr_action_starting',
    DataReady: 'w2hr_action_data_ready',
    Error: 'w2hr_action_error',
}

/** Fetch the wether forecast data from server */
export const fetchWeather2Hours = () => (dispatch: ReduxDispatch) => {
        fetchData(config.URL_WEATHER_FORECAST_2_HOURS, dispatch, W2HrActionTypes)
    }

export default fetchWeather2Hours
