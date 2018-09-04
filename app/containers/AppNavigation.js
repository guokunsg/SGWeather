// @flow

import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import WeatherScreen2hr from './WeatherScreen2hr'
import appStyles from '../AppStyle'

export const WeatherForecast2hr = createStackNavigator({
    Home: { screen: WeatherScreen2hr },
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
}, {
    initialRouteName: 'Weather2Hr',
})

export default AppNavigation
