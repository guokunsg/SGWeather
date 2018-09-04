// @flow

import Immutable from 'seamless-immutable'
import { W2HrActionTypes } from '../actions/WeatherAction2hr'
import type { W2HrAction, W2HrState, W2HrForecasts } from '../types/Weather2hr'

/** Current state status */
export const W2HR_STATE_INIT = 'w2hr_state_init'
export const W2HR_STATE_LOADING = 'w2hr_state_loading'
export const W2HR_STATE_DATA_REFRESHED = 'w2hr_state_data_refreshed'
export const W2HR_STATE_ERROR = 'w2hr_state_error'

const initState = {
    status: W2HR_STATE_INIT,
    data: null,
    error: null,
}

/**
 * Convert server data to local data
 * @param {object} serverData
 */
function convertData(serverData: any) : W2HrForecasts {
    const map = new Map()
    serverData.area_metadata.forEach((value) => {
        const location = {}
        location.name = value.name
        location.latitude = value.label_location.latitude
        location.longitude = value.label_location.longitude
        map.set(value.name, location)
    })
    const forecasts = []
    serverData.items[0].forecasts.forEach((value) => {
        const location = map.get(value.area)
        if (location) {
            location.forecast = value.forecast
            forecasts.push(location)
        }
    })
    const data = {
        validFrom: new Date(serverData.items[0].valid_period.start),
        validTo: new Date(serverData.items[0].valid_period.end),
        forecasts,
    }
    return Immutable(data)
}

export const reducer = (state: W2HrState = initState, action: W2HrAction) => {
    switch (action.type) {
        case W2HrActionTypes.Start: {
            return Immutable({
                status: W2HR_STATE_LOADING,
                data: state.data,
                error: null,
            })
        }
        case W2HrActionTypes.DataReady: {
            try {
                return Immutable({
                    status: W2HR_STATE_DATA_REFRESHED,
                    data: convertData(action.data),
                    error: null,
                })
            } catch (err) {
                console.error(err)
                return Immutable({
                    status: W2HR_STATE_ERROR,
                    data: state.data,
                    error: new Error('Data error'),
                })
            }
        }
        case W2HrActionTypes.Error: {
            return Immutable({
                status: W2HR_STATE_ERROR,
                data: state.data,
                error: action.error,
            })
        }
        default:
            return state
    }
}

export default reducer
