// @flow

/* eslint-disable global-require */

import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { NavigationScreenProp } from 'react-navigation'
import { fetchWeather2Hr } from '../actions/WeatherAction2hr'
import type { FetchWeather2Hr } from '../types/WeatherForecast'
import appStyles from '../AppStyle'

import WeatherHeader2hr from './WeatherHeader2hr'
import WeatherNavigator2hr from './WeatherNavigator2hr'

// Create the refresh button in the header bar
function createRefreshButton(navigation) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={navigation.getParam('actionRefresh')}>
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
    actionRefresh: FetchWeather2Hr,
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
        const { actionRefresh, navigation } = this.props
        actionRefresh()
        // Set the action so that the header can call it
        navigation.setParams({ actionRefresh })
    }

    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: appStyles.mainBackgroundColor }}>
            <WeatherHeader2hr />
            <WeatherNavigator2hr />
          </View>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({ actionRefresh: fetchWeather2Hr }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen2hr)
