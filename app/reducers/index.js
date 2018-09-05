// @flow

import { combineReducers } from 'redux'
import weather2hr from './WeatherReducer2hr'
import weather24hr from './WeatherReducer24hr'

export default combineReducers({
    weather2hr,
    weather24hr,
})
