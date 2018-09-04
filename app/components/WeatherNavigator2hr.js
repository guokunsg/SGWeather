// @flow

/** Export  */

import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import WeatherList from './WeatherList'
import WeatherMap from './WeatherMap'
import appStyle from '../AppStyle'
import type { W2HrForecastItem } from '../types/Weather2hr'

/**
 * Create a bottom tab navigator, which contains 2hours weather forecast list and map display
 * @param {*} data
 *      Weather forecast array
 */
function createWeatherNavigator2hr(forecasts: ?Array<W2HrForecastItem>) {
    return createBottomTabNavigator({
        LIST: { screen: props => <WeatherList {...props} data={forecasts} /> },
        MAP: { screen: props => <WeatherMap {...props} data={forecasts} /> },
    }, {
        tabBarOptions: appStyle.bottomTabBarOption,
    })
}

export default createWeatherNavigator2hr
