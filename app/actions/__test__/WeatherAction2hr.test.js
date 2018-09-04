
import { W2HR_ACTION_STARTING, W2HR_ACTION_DATA_READY, W2HR_ACTION_ERROR,
    fetchWeather2Hours } from '../WeatherAction2hr'

describe('Fetch weather forecast action', () => {
    it('Test fetch data', () => {
        let count = 0
        fetchWeather2Hours()((action) => {
            if (count === 0) {
                expect(action).toEqual({
                    type: W2HR_ACTION_STARTING, data: null, error: null,
                })
            } else if (action.type === W2HR_ACTION_DATA_READY) {
                    expect(action.data).not.toBeNull()
                } else if (action.type === W2HR_ACTION_ERROR) {
                    expect(action.error).not.toBeNull()
                } else {
                    throw new Error('Unexpected type')
                }
            count += 1
        })
    })
})
