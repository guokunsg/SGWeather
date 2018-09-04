// @flow

import { combineReducers } from 'redux'
import weather2hr from './Weather2hrReducer'
import weather24hr from './Weather24hrReducer'

export default combineReducers({
    weather2hr,
    weather24hr,
})
