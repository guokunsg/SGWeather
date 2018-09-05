// @flow

/** The map display of the weather forecast */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import appConfig from '../AppConfig'
import getWeatherImageSource from './WeatherImageSource'
import type { LocationForecast } from '../types/WeatherForecast'

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

type Props = {
    data: Array<LocationForecast>
}

/** The map display of the weather forecast */
export class WeatherForecastMap extends Component<Props> {
    render() {
        const { data } = this.props
        const markers = []
        if (data) {
            for (let i = 0; i < data.length; i += 1) {
                markers.push({
                    ...data[i],
                    latlng: { latitude: data[i].latitude, longitude: data[i].longitude },
                    key: data[i].name,
                })
            }
        }

        return (
          <View style={styles.container}>
            <MapView style={styles.map} region={appConfig.mapDefaultRegion}>
              {
                markers.map(marker => (
                  <Marker
                    coordinate={marker.latlng}
                    title={marker.name}
                    image={getWeatherImageSource(marker.forecast)}
                    key={marker.name}
                  />
                ))}
            </MapView>
          </View>
        )
    }
}

export default WeatherForecastMap
