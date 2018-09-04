// @flow

import axios from 'axios'
import type { Dispatch as ReduxDispatch } from 'redux'
import config from '../AppConfig'

import type { W2HrActionType, W2HrAction } from '../types/Weather2hr'

// 2 hours weather forecast action type allowed values
export const W2HR_ACTION_STARTING = 'w2hr_action_starting'
export const W2HR_ACTION_DATA_READY = 'w2hr_action_data_ready'
export const W2HR_ACTION_ERROR = 'w2hr_action_error'

function createDispatchAction(type: W2HrActionType, data: any, error: ?Error) : W2HrAction {
    return { type, data, error }
}

/** Fetch the wether forecast data from server */
export const fetchWeather2Hours = () => (dispatch: ReduxDispatch) => {
        console.debug('Start fetching data ...')
        dispatch(createDispatchAction(W2HR_ACTION_STARTING, null, null))
        axios.get(config.URL_WEATHER_FORECAST_2_HOURS)
            .then((res) => {
                dispatch(createDispatchAction(W2HR_ACTION_DATA_READY, res.data, null))
            })
            .catch((err) => {
                console.error(err)
                dispatch(createDispatchAction(W2HR_ACTION_ERROR, null, err))
            })
    }

export default fetchWeather2Hours
