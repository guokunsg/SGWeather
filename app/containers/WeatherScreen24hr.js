// @flow

/* eslint-disable global-require */

import React from 'react'
import { ScrollView, StyleSheet, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather24Hr } from '../actions/WeatherAction24hr'
import { NetworkStoreStatusLoading } from '../types/NetworkActionStore'
import type { WeatherState24Hr, FetchWeather24Hr } from '../types/WeatherForecast'

import ForecastHeaderBanner from '../components/ForecastHeaderBanner'
import ForecastDetails from '../components/ForecastDetails'
import PeriodForecast from '../components/PeriodForecast'
import appStyle from '../AppStyle'

type Props = {
    state: WeatherState24Hr,
    actionRefresh: FetchWeather24Hr,
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: appStyle.mainBackgroundColor,
    },
})

class WeatherScreen2hr extends React.Component<Props> {
    // React Navigation doesn't guarantee that screen component will be mounted before the header.
    // onGetWeatherForecast2Hours may be null and the click is ignored
    static navigationOptions = () => ({
            title: 'Weather Forecast (24 Hours)',
        });

    componentDidMount() {
        const { actionRefresh } = this.props
        actionRefresh()
    }

    render() {
        const { state, actionRefresh } = this.props
        const forecast = state.data
        return (
          <ScrollView
            style={styles.main}
            refreshControl={
              <RefreshControl refreshing={state.status === NetworkStoreStatusLoading} onRefresh={actionRefresh} />
          }
          >
            <ForecastHeaderBanner state={state} />
            <ForecastDetails forecast={forecast} />
            { forecast && forecast.periodForecasts.map((data, i) => {
                return <PeriodForecast forecast={data} key={i.toString()} />
            })}
          </ScrollView>
        )
    }
}

const mapStateToProps = state => ({ state: state.weather24hr })

const mapDispatchToProps = dispatch => bindActionCreators({ actionRefresh: fetchWeather24Hr }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen2hr)
