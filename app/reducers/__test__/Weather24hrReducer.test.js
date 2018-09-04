
import reducer, { W24HR_STATE_INIT, W24HR_STATE_LOADING, W24HR_STATE_DATA_REFRESHED, W24HR_STATE_ERROR,
    } from '../Weather24hrReducer'
import { W24HrActionTypes } from '../../actions/WeatherAction24hr'

/* eslint-disable max-len */
const SAMPLE_DATA = '{"items":[{"update_timestamp":"2018-09-04T17:51:14+08:00","timestamp":"2018-09-04T17:35:00+08:00","valid_period":{"start":"2018-09-04T18:00:00+08:00","end":"2018-09-05T18:00:00+08:00"},"general":{"forecast":"Thundery Showers","relative_humidity":{"low":75,"high":95},"temperature":{"low":24,"high":28},"wind":{"speed":{"low":10,"high":20},"direction":"S"}},"periods":[{"time":{"start":"2018-09-04T18:00:00+08:00","end":"2018-09-05T06:00:00+08:00"},"regions":{"west":"Cloudy","east":"Cloudy","central":"Cloudy","south":"Cloudy","north":"Cloudy"}}]}],"api_info":{"status":"healthy"}}'

const actionLoading = { type: W24HrActionTypes.Start, data: null, error: null }
const actionData = { type: W24HrActionTypes.DataReady, data: JSON.parse(SAMPLE_DATA), error: null }
const actionError = { type: W24HrActionTypes.Error, data: null, error: new Error('Network error') }

const expectedData = {
    validFrom: new Date('2018-09-04T18:00:00+08:00'),
    validTo: new Date('2018-09-05T18:00:00+08:00'),
    humidity_low: 75,
    humidity_high: 95,
    temp_low: 24,
    temp_high: 28,
    wind_speed_low: 10,
    wind_speed_high: 20,
    wind_direction: 'S',
    regions: [{
        start: new Date('2018-09-04T18:00:00+08:00'),
        end: new Date('2018-09-05T06:00:00+08:00'),
        west: 'Cloudy',
        east: 'Cloudy',
        central: 'Cloudy',
        south: 'Cloudy',
        north: 'Cloudy',
    }],
}

describe('WeatherForecast reducer', () => {
    let lastState
    it('should return the initial state', () => {
        lastState = reducer(lastState, {})
        expect(lastState).toEqual({
            status: W24HR_STATE_INIT, data: null, error: null,
        })
    })

    it('should return loading state', () => {
        lastState = reducer(lastState, actionLoading)
        expect(lastState).toEqual({
            status: W24HR_STATE_LOADING, data: null, error: null,
        })
    })

    it('should return data state', () => {
        lastState = reducer(lastState, actionData)
        expect(lastState).toEqual({
            status: W24HR_STATE_DATA_REFRESHED,
            data: expectedData,
            error: null,
        })
    })

    it('should return error state', () => {
        lastState = reducer(lastState, actionError)
        expect(lastState).toEqual({
            status: W24HR_STATE_ERROR,
            data: expectedData, // Expect data is still there
            error: actionError.error,
        })
    })
})
