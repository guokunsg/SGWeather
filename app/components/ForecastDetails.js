// @flow

/** Export  */

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import type { WeatherForecastDetailed } from '../types/WeatherForecast'

import getWeatherImageSource from './WeatherImageSource'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    image: { width: 90, height: 90, padding: 8, marginLeft: 16, marginRight: 16 },
    infoContainer: { flex: 1, flexDirection: 'column', padding: 8 },
    textContainer: { flexDirection: 'row', padding: 4 },
    textName: { flex: 1, textAlign: 'left' },
    textValue: { flex: 1, textAlign: 'left', fontWeight: 'bold', paddingLeft: 16 },
})

function getForecastImage(forecast) {
    const src = forecast ? getWeatherImageSource(forecast.generalForecast)
        // $FlowFixMe : Ignore the flow error
        : require('../images/no_image.png') // eslint-disable-line global-require
    return <Image style={styles.image} source={src} />
}

function createInfo(name: string, value: string) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textValue}>{value}</Text>
      </View>
    )
}

type Props = {
    forecast: ?WeatherForecastDetailed
}

/** Header banner which shows text to reflect the current state status change. */
export default class ForecastHeaderBanner extends React.Component<Props> {
    render() {
        const { forecast } = this.props
        return (
          <View style={styles.container}>
            { getForecastImage(forecast) }
            <View style={styles.infoContainer}>
              { createInfo('Temperature:',
                forecast ? `${forecast.tempLow} - ${forecast.tempHigh} ℃` : 'NA') }
              { createInfo('Humidity:',
                forecast ? `${forecast.humidityLow} - ${forecast.humidityHigh} %` : 'NA') }
              { createInfo('Wind:',
                forecast ? `${forecast.windSpeedLow} - ${forecast.windSpeedHigh} km/h` : 'NA') }
            </View>
          </View>
        )
    }
}
