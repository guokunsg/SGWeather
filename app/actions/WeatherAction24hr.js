// @flow

import type { Dispatch as ReduxDispatch } from 'redux'
import config from '../AppConfig'

import { fetchData } from './NetworkAction'
import type { NetworkAction } from '../types/NetworkActionStore'

// 2 hours weather forecast action type allowed values
export const WeatherActionTypes24Hr = {
    Start: 'w24hr_action_starting',
    DataReady: 'w24hr_action_data_ready',
    Error: 'w24hr_action_error',
}

/** Fetch the wether forecast data from server */
export const fetchWeather24Hr = () => (dispatch: ReduxDispatch<NetworkAction>) => {
        fetchData(config.urlWeatherForecast24Hr, dispatch, WeatherActionTypes24Hr)
    }

export default fetchWeather24Hr
