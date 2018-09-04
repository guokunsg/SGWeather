// @flow

import Immutable from 'seamless-immutable'
import { W24HrActionTypes } from '../actions/WeatherAction24hr'
import type { W24HrAction, W24HrState, W24HrForecasts } from '../types/Weather24hr'
import networkReducer from './NetworkReducer'

/** Current state status */
export const W24HR_STATE_INIT = 'w24hr_state_init'
export const W24HR_STATE_LOADING = 'w24hr_state_loading'
export const W24HR_STATE_DATA_REFRESHED = 'w24hr_state_data_refreshed'
export const W24HR_STATE_ERROR = 'w24hr_state_error'
export const W24HrStoreStatus = Immutable({
    Init: W24HR_STATE_INIT,
    Loading: W24HR_STATE_LOADING,
    DataUpdated: W24HR_STATE_DATA_REFRESHED,
    Error: W24HR_STATE_ERROR,
})

const initState = {
    status: W24HR_STATE_INIT,
    data: null,
    error: null,
}

/**
 * Convert server data to local data
 * @param {object} serverData
 */
function convertData(serverData: any) : W24HrForecasts {
    const data = serverData.items[0]
    const forecast = {
        validFrom: new Date(data.valid_period.start),
        validTo: new Date(data.valid_period.end),
        humidity_low: data.general.relative_humidity.low,
        humidity_high: data.general.relative_humidity.high,
        temp_low: data.general.temperature.low,
        temp_high: data.general.temperature.high,
        wind_speed_low: data.general.wind.speed.low,
        wind_speed_high: data.general.wind.speed.high,
        wind_direction: data.general.wind.direction,
        regions: [],
    }
    data.periods.forEach((item) => {
        forecast.regions.push({
            start: new Date(item.time.start),
            end: new Date(item.time.end),
            west: item.regions.west,
            east: item.regions.east,
            central: item.regions.central,
            south: item.regions.south,
            north: item.regions.north,
        })
    })
    return forecast
}

const reducer = (state: W24HrState = initState, action: W24HrAction) => { // eslint-disable-line arrow-body-style
    return networkReducer(state, action, convertData, W24HrActionTypes, W24HrStoreStatus)
}

export default reducer
