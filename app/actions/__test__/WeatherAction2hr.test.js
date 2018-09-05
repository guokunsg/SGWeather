
import { WeatherActionTypes2Hr, fetchWeather2Hr } from '../WeatherAction2hr'

// Need to mock hasConnection which requires react native module
jest.unmock('../../utils/Utils')
const utils = require.requireActual('../../utils/Utils')

describe('Fetch weather forecast action', () => {
    it('Test fetch data', (done) => {
        utils.hasConnection = jest.fn(() => Promise.resolve(true)) // Mock has connection
        let count = 0
        fetchWeather2Hr()((action) => {
            if (count === 0) {
                expect(action).toEqual({ type: WeatherActionTypes2Hr.Start, data: null, error: null })
            } else if (action.type === WeatherActionTypes2Hr.DataReady) {
                expect(action.data).not.toBeNull() // Some data should be returned
            } else if (action.type === WeatherActionTypes2Hr.Error) {
                expect(action.data).not.toBeNull() // Maybe some network error
            } else {
                throw new Error('Unexpected type')
            }
            count += 1
            if (count === 2) {
                done()
            }
        })
    }, 30000)
})
