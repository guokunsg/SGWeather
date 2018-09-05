// @flow

/** Export  */

import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import WeatherList from '../components/WeatherList'
import WeatherMap from '../components/WeatherMap'
import appStyle from '../AppStyle'
import type { LocationForecast, WeatherForecast } from '../types/WeatherForecast'

/**
 * Create a bottom tab navigator, which contains 2hours weather forecast list and map display
 * @param {*} data
 *      Weather forecast array
 */
function createWeatherNavigator2hr(forecasts: ?Array<LocationForecast>) {
    return createBottomTabNavigator({
        LIST: { screen: props => <WeatherList {...props} data={forecasts} columns={3} /> },
        MAP: { screen: props => <WeatherMap {...props} data={forecasts} /> },
    }, {
        tabBarOptions: appStyle.bottomTabBarOption,
    })
}

type Props = {
    forecasts: WeatherForecast
}

/** TabNavigator to show weather forecast in list or map.
 * Only re-render if the forecast data has been changed.
 */
export class WeatherNavigator2hr extends React.Component<Props> {
    // Checks whether should update UI. Update only if the data has been changed
    shouldComponentUpdate(nextProps: Object) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps)
    }

    render() {
        const { forecasts } = this.props
        const Navigator = createWeatherNavigator2hr(forecasts == null ? null : forecasts.forecasts)
        // persistenceKey allows navigator to save the last navigation state
        return (
          <Navigator persistenceKey="WeatherForecast2HoursTabState" />
        )
    }
}

const mapStateToProps = state => ({ forecasts: state.weather2hr.data })

export default connect(mapStateToProps)(WeatherNavigator2hr)
