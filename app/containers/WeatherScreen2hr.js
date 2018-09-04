// @flow

/* eslint-disable global-require */

import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationScreenProp } from 'react-navigation'
import { fetchWeather2Hours } from '../actions/WeatherAction2hr'
import type { W2HrFetch2Hours } from '../types/Weather2hr'
import appStyles from '../AppStyle'

import WeatherHeader2hr from './WeatherHeader2hr'
import WeatherNavigator2hr from './WeatherNavigator2hr'

// Create the refresh button in the header bar
function createRefreshButton(navigation) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={navigation.getParam('fetchWeather2Hours')}>
        <Image
          style={appStyles.styles.headerBarButton}
          source={
                // $FlowFixMe : Ignore the flow error
                require('../images/refresh.png')
            }
        />
      </TouchableOpacity>
    )
}

type Props = {
    fetchWeather2Hours: W2HrFetch2Hours,
    navigation: NavigationScreenProp<{}>,
}

class WeatherScreen2hr extends React.Component<Props> {
    // React Navigation doesn't guarantee that screen component will be mounted before the header.
    // onGetWeatherForecast2Hours may be null and the click is ignored
    static navigationOptions = ({ navigation }) => ({
            title: 'Weather Forecast (2 Hours)',
            headerRight: createRefreshButton(navigation),
        });

    componentDidMount() {
        const { fetchWeather2Hours, navigation } = this.props // eslint-disable-line no-shadow
        fetchWeather2Hours()
        // Set the action so that the header can call it
        navigation.setParams({ fetchWeather2Hours })
    }

    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <WeatherHeader2hr />
            <WeatherNavigator2hr />
          </View>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWeather2Hours }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen2hr)
