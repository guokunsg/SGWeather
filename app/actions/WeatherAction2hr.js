// @flow

import type { Dispatch as ReduxDispatch } from 'redux'
import config from '../AppConfig'

import { fetchData } from './NetworkAction'
import type { NetworkAction } from '../types/NetworkActionStore'

// 2 hours weather forecast action type allowed values
export const WeatherActionTypes2Hr = {
    Start: 'w2hr_action_starting',
    DataReady: 'w2hr_action_data_ready',
    Error: 'w2hr_action_error',
}

/** Fetch the wether forecast data from server */
export const fetchWeather2Hr = () => (dispatch: ReduxDispatch<NetworkAction>) => {
        fetchData(config.urlWeatherForecast2Hr, dispatch, WeatherActionTypes2Hr)
    }

export default fetchWeather2Hr
