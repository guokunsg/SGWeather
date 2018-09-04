// @flow

/* eslint-disable global-require */

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationScreenProp } from 'react-navigation'
import { fetchWeather2Hours } from '../actions/WeatherAction2hr'
import type { W2HrFetch2Hours, W2HrState } from '../types/Weather2hr'
import { W2HR_STATE_LOADING, W2HR_STATE_DATA_REFRESHED, W2HR_STATE_ERROR }
    from '../reducers/Weather2hrReducer'
import appStyles from '../AppStyle'
import createWeatherNavigator2hr from '../components/WeatherNavigator2hr'

// Format the date to display. Format: YY-MM-DD HH:MM
function formatDate(date: Date) {
    /* eslint-disable prefer-template */
    return (date.getFullYear() % 100)
            + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '-' + ('0' + date.getDate()).slice(-2)
            + ' ' + ('0' + date.getHours()).slice(-2)
            + ':' + ('0' + date.getMinutes()).slice(-2)
    /* eslint-disable prefer-template */
}

// Get the header text based on the current state status
function getHeaderText(state: W2HrState) {
    switch (state.status) {
        case W2HR_STATE_LOADING:
            return 'Loading data ...'
        case W2HR_STATE_DATA_REFRESHED:
            return `Forecast from ${formatDate(state.data.validFrom)} to ${formatDate(state.data.validTo)}`
        case W2HR_STATE_ERROR:
            return `Error: ${state.error.message}`
        default:
            return 'No data'
    }
}

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

export const styles = StyleSheet.create({
    header: {
        textAlign: 'left',
        backgroundColor: '#F5FCFF',
        padding: 4,
        paddingLeft: 16,
    },
})

type Props = {
    fetchWeather2Hours: W2HrFetch2Hours,
    navigation: NavigationScreenProp<{}>,
    weather2hr: W2HrState
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
        const { weather2hr } = this.props
        const headerText = getHeaderText(weather2hr)
        const listData = weather2hr.data ? weather2hr.data.forecasts : null
        const TabNavigator = createWeatherNavigator2hr(listData)
        return (
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.header}>{headerText}</Text>
            <TabNavigator persistenceKey="WeatherForecast2HoursTabState" />
          </View>
        )
    }
}

const mapStateToProps = state => ({
    weather2hr: state.weather2hr,
    })

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchWeather2Hours,
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen2hr)
