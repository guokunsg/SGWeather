// @flow

import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import WeatherScreen2hr from './WeatherScreen2hr'
import WeatherScreen24hr from './WeatherScreen24hr'
import appStyles from '../AppStyle'

export const WeatherForecast2hr = createStackNavigator({
    Home: { screen: WeatherScreen2hr },
}, {
    initialRouteName: 'Home',
    navigationOptions: appStyles.headerBarStyle,
})

export const WeatherForecast24hr = createStackNavigator({
    Home: { screen: WeatherScreen24hr },
}, {
    initialRouteName: 'Home',
    navigationOptions: appStyles.headerBarStyle,
})

/**
 * Main drawer navigation
 */
export const AppNavigation = createDrawerNavigator({
    Weather2Hr: {
        screen: WeatherForecast2hr,
        navigationOptions: {
            drawerLabel: 'Weather Forecast (2 Hours)',
        },
    },
    WeatherForecast24hr: {
        screen: WeatherForecast24hr,
        navigationOptions: {
            drawerLabel: 'Weather Forecast (24 Hours)',
        },
    },
}, {
    initialRouteName: 'Weather2Hr',
})

export default AppNavigation
