import { NetworkStoreStatusInit, NetworkStoreStatusLoading, NetworkStoreStatusDataUpdated,
        NetworkStoreStatusError } from '../../types/NetworkActionStore'
import { WeatherActionTypes24Hr } from '../../actions/WeatherAction24hr'
import reducer from '../WeatherReducer24hr'
import appConfig from '../../AppConfig'

/* eslint-disable max-len */
const SAMPLE_DATA = '{"items":[{"update_timestamp":"2018-09-04T17:51:14+08:00","timestamp":"2018-09-04T17:35:00+08:00","valid_period":{"start":"2018-09-04T18:00:00+08:00","end":"2018-09-05T18:00:00+08:00"},"general":{"forecast":"Thundery Showers","relative_humidity":{"low":75,"high":95},"temperature":{"low":24,"high":28},"wind":{"speed":{"low":10,"high":20},"direction":"S"}},"periods":[{"time":{"start":"2018-09-04T18:00:00+08:00","end":"2018-09-05T06:00:00+08:00"},"regions":{"west":"Cloudy","east":"Cloudy","central":"Cloudy","south":"Cloudy","north":"Cloudy"}}]}],"api_info":{"status":"healthy"}}'

const actionLoading = { type: WeatherActionTypes24Hr.Start, data: null, error: null }
const actionData = { type: WeatherActionTypes24Hr.DataReady, data: JSON.parse(SAMPLE_DATA), error: null }
const actionError = { type: WeatherActionTypes24Hr.Error, data: null, error: new Error('Network error') }

const expectedData = {
    validFrom: new Date('2018-09-04T18:00:00+08:00'),
    validTo: new Date('2018-09-05T18:00:00+08:00'),
    humidityLow: 75,
    humidityHigh: 95,
    tempLow: 24,
    tempHigh: 28,
    windSpeedLow: 10,
    windSpeedHigh: 20,
    windDirection: 'S',
    generalForecast: 'Thundery Showers',
    periodForecasts: [{
        validFrom: new Date('2018-09-04T18:00:00+08:00'),
        validTo: new Date('2018-09-05T06:00:00+08:00'),
        forecasts: [
            { name: 'west', latitude: appConfig.locationWest.latitude, longitude: appConfig.locationWest.longitude, forecast: 'Cloudy' },
            { name: 'east', latitude: appConfig.locationEast.latitude, longitude: appConfig.locationEast.longitude, forecast: 'Cloudy' },
            { name: 'central', latitude: appConfig.locationCentral.latitude, longitude: appConfig.locationCentral.longitude, forecast: 'Cloudy' },
            { name: 'south', latitude: appConfig.locationSouth.latitude, longitude: appConfig.locationSouth.longitude, forecast: 'Cloudy' },
            { name: 'north', latitude: appConfig.locationNorth.latitude, longitude: appConfig.locationNorth.longitude, forecast: 'Cloudy' },
        ],
    }],
}

describe('WeatherForecast reducer', () => {
    let lastState
    it('should return the initial state', () => {
        lastState = reducer(lastState, {})
        expect(lastState).toEqual({
            status: NetworkStoreStatusInit, data: null, error: null,
        })
    })

    it('should return loading state', () => {
        lastState = reducer(lastState, actionLoading)
        expect(lastState).toEqual({
            status: NetworkStoreStatusLoading, data: null, error: null,
        })
    })

    it('should return data state', () => {
        lastState = reducer(lastState, actionData)
        expect(lastState).toEqual({
            status: NetworkStoreStatusDataUpdated,
            data: expectedData,
            error: null,
        })
    })

    it('should return error state', () => {
        lastState = reducer(lastState, actionError)
        expect(lastState).toEqual({
            status: NetworkStoreStatusError,
            data: expectedData, // Expect data is still there
            error: actionError.error,
        })
    })
})
