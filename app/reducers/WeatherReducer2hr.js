// @flow

import Immutable from 'seamless-immutable'
import { WeatherActionTypes2Hr } from '../actions/WeatherAction2hr'
import type { WeatherAction2Hr, WeatherState2Hr, WeatherForecast } from '../types/WeatherForecast'
import networkReducer from './NetworkReducer'

const initState = {
    status: 'NetworkStoreStatusInit',
    data: null,
    error: null,
}

/**
 * Convert server data to local data
 * @param {object} serverData
 */
function convertData(serverData: any) : WeatherForecast {
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

const reducer = (state: WeatherState2Hr = initState,
    action: WeatherAction2Hr) => networkReducer(state, action, convertData, WeatherActionTypes2Hr)

export default reducer
