
import reducer, { W2HR_STATE_INIT, W2HR_STATE_LOADING, W2HR_STATE_DATA_REFRESHED, W2HR_STATE_ERROR,
    } from '../Weather2hrReducer'
import { W2HR_ACTION_STARTING, W2HR_ACTION_DATA_READY, W2HR_ACTION_ERROR } from '../../actions/WeatherAction2hr'

/* eslint-disable max-len */
const SAMPLE_DATA = '{"area_metadata":[{"name":"Ang Mo Kio","label_location":{"latitude":1.375,"longitude":103.839}},{"name":"Bedok","label_location":{"latitude":1.321,"longitude":103.924}}],"items":[{"update_timestamp":"2018-09-03T19:03:52+08:00","timestamp":"2018-09-03T19:00:00+08:00","valid_period":{"start":"2018-09-03T19:00:00+08:00","end":"2018-09-03T21:00:00+08:00"},"forecasts":[{"area":"Ang Mo Kio","forecast":"Partly Cloudy (Night)"},{"area":"Bedok","forecast":"Partly Cloudy (Night)"}]}],"api_info":{"status":"healthy"}}'

const actionLoading = { type: W2HR_ACTION_STARTING, data: null, error: null }
const actionData = { type: W2HR_ACTION_DATA_READY, data: JSON.parse(SAMPLE_DATA), error: null }
const actionError = { type: W2HR_ACTION_ERROR, data: null, error: new Error('Network error') }

const expectedData = {
    validFrom: new Date('2018-09-03T19:00:00+08:00'),
    validTo: new Date('2018-09-03T21:00:00+08:00'),
    forecasts: [
        { name: 'Ang Mo Kio', latitude: 1.375, longitude: 103.839, forecast: 'Partly Cloudy (Night)' },
        { name: 'Bedok', latitude: 1.321, longitude: 103.924, forecast: 'Partly Cloudy (Night)' },
    ],
}

describe('WeatherForecast reducer', () => {
    let lastState
    it('should return the initial state', () => {
        lastState = reducer(lastState, {})
        expect(lastState).toEqual({
            status: W2HR_STATE_INIT, data: null, error: null,
        })
    })

    it('should return loading state', () => {
        lastState = reducer(lastState, actionLoading)
        expect(lastState).toEqual({
            status: W2HR_STATE_LOADING, data: null, error: null,
        })
    })

    it('should return data state', () => {
        lastState = reducer(lastState, actionData)
        expect(lastState).toEqual({
            status: W2HR_STATE_DATA_REFRESHED,
            data: expectedData,
            error: null,
        })
    })

    it('should return error state', () => {
        lastState = reducer(lastState, actionError)
        expect(lastState).toEqual({
            status: W2HR_STATE_ERROR,
            data: expectedData, // Expect data is still there
            error: actionError.error,
        })
    })
})
