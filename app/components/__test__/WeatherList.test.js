import React from 'react'
import 'react-native'

import render from 'react-test-renderer'

import WeatherList from '../WeatherList'

// require(...) in WeatherImageSource will cause error.
// Second parameter is the factory function which returns the mocked function that just returns the input
jest.mock('../WeatherImageSource', () => weather => ({ uri: weather }))

describe('Test weather forecast list', () => {
    function createData(name, latitude, longitude, forecast) {
        return { name, latitude, longitude, forecast }
    }

    it('renders empty', () => {
        const tree = render.create(<WeatherList />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('render data', () => {
        const data = []
        data.push(createData('data1', 1.0, 1.0, 'Cloudy'))
        data.push(createData('data2', 1.1, 1.1, 'Partly Cloudy (Day)'))
        data.push(createData('data3', 1.2, 1.2, 'Partly Cloudy (Night)'))
        data.push(createData('data4', 1.3, 1.3, 'Moderate Rain'))
        data.push(createData('data5', 1.4, 1.4, 'Light Rain'))
        data.push(createData('data6', 1.5, 1.5, 'Light Showers'))
        data.push(createData('data7', 1.5, 1.5, 'Showers'))
        data.push(createData('data8', 1.5, 1.5, 'Thundery Showers'))
        data.push(createData('data9', 1.5, 1.5, 'unknown text'))

        const tree = render.create(<WeatherList data={data} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
