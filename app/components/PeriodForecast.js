// @flow

/** Export  */

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import type { WeatherForecast } from '../types/WeatherForecast'

import appStyle from '../AppStyle'
import { formatDate } from '../utils/Utils'
import { WeatherList } from './WeatherList'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
    },
    text: {
        textAlign: 'left',
        backgroundColor: appStyle.bannerBackgroundColor,
        color: 'grey',
        padding: 4,
        paddingLeft: 16,
    },
})

type Props = {
    forecast: WeatherForecast
}

/** Header banner which shows text to reflect the current state status change. */
export default class PeriodForecast extends React.Component<Props> {
    render() {
        const { forecast } = this.props
        return (
          <View style={styles.container}>
            <Text style={styles.text}>{ `${formatDate(forecast.validFrom)} - ${formatDate(forecast.validTo)}` }</Text>
            <WeatherList data={forecast.forecasts} columns={5} />
          </View>
        )
    }
}
