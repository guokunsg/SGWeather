
import { fetchData } from '../NetworkAction'
import appConfig from '../../AppConfig'

// Need to mock hasConnection which requires react native module
jest.unmock('../../utils/Utils')
const utils = require.requireActual('../../utils/Utils')

const types = {
    Start: 'test_start',
    DataReady: 'test_data_ready',
    Error: 'test_error',
}

describe('Fetch network action', () => {
    it('Test fetch data success', (done) => {
        utils.hasConnection = jest.fn(() => Promise.resolve(true)) // Mock has connection
        let count = 0
        fetchData(appConfig.urlWeatherForecast2Hr, ((action) => {
            if (count === 0) {
                expect(action).toEqual({ type: types.Start, data: null, error: null })
            } else if (action.type === types.DataReady) {
                expect(action.data).not.toBeNull() // Some data should be returned
            } else {
                throw new Error('Unexpected type')
            }
            count += 1
            if (count === 2) {
                done()
            }
        }), types)
    }, 30000)

    it('Test no network', (done) => {
        utils.hasConnection = jest.fn(() => Promise.resolve(false)) // Mock no connection
        fetchData(appConfig.urlWeatherForecast24Hr, ((action) => {
            expect(action).toEqual({ type: types.Error, data: null, error: new Error('No network') })
            done()
        }), types)
    }, 30000)
})
