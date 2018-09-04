
import { W2HrActionTypes, fetchWeather2Hours } from '../WeatherAction2hr'

// Need to mock hasConnection which requires react native module
jest.unmock('../../utils/Utils')
const utils = require.requireActual('../../utils/Utils')

describe('Fetch weather forecast action', () => {
    it('Test fetch data', (done) => {
        utils.hasConnection = jest.fn(() => Promise.resolve(true)) // Mock has connection
        let count = 0
        fetchWeather2Hours()((action) => {
            if (count === 0) {
                expect(action).toEqual({ type: W2HrActionTypes.Start, data: null, error: null })
            } else if (action.type === W2HrActionTypes.DataReady) {
                expect(action.data).not.toBeNull() // Some data should be returned
            } else if (action.type === W2HrActionTypes.Error) {
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
