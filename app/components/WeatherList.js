// @flow

/** The list display of the weather forecast */

import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

import getWeatherImageSource from './WeatherImageSource'
import type { W2HrForecastItem } from '../types/Weather2hr'

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    listItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8,
    },
    itemText: {
        flex: 1,
        textAlign: 'center',
        padding: 8,
    },
    itemImage: {
        width: 50,
        height: 50,
    },
    itemTextNoImage: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        height: 60,
    },
})

// Get the Image or Text to display for the weather forecast
function getWeatherImage(forecast: string) {
    const src = getWeatherImageSource(forecast)
    if (src) {
        return <Image style={styles.itemImage} source={src} />
    }
    // Return text if the forecast is not recognized
    return <Text style={styles.itemTextNoImage}>{forecast}</Text>
}

type Props = {
    data: Array<W2HrForecastItem>
}
export class WeatherList extends Component<Props> {
    componentDidMount() {
    }

    renderItem = ({ item }: { item: W2HrForecastItem }) => ( // eslint-disable-line react/no-unused-prop-types
      <View style={styles.listItem}>
        { getWeatherImage(item.forecast) }
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );

    keyExtractor = (item: W2HrForecastItem) => item.name

    render() {
        const { data } = this.props
        return (
          <FlatList
            styles={styles.list}
            data={data}
            numColumns={3}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        )
    }
}

export default WeatherList
