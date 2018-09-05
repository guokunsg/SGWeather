// @flow

/** Export  */

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { formatDate } from '../utils/Utils'
import { NetworkStoreStatusLoading, NetworkStoreStatusDataUpdated,
    NetworkStoreStatusError } from '../types/NetworkActionStore'
import type { WeatherState2Hr, WeatherState24Hr } from '../types/WeatherForecast'
import appStyle from '../AppStyle'

// Get the header text based on the current state status
function getHeaderText(state: WeatherState2Hr | WeatherState24Hr): string {
    switch (state.status) {
        case NetworkStoreStatusLoading:
            return 'Loading data ...'
        case NetworkStoreStatusDataUpdated:
            return `Forecast from ${formatDate(state.data.validFrom)} to ${formatDate(state.data.validTo)}`
        case NetworkStoreStatusError:
            return `Error: ${state.error.message}`
        default:
            return 'No data'
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'left',
        backgroundColor: appStyle.bannerBackgroundColor,
        padding: 4,
        paddingLeft: 16,
    },
})

type Props = {
    state: WeatherState2Hr | WeatherState24Hr
}

/** Header banner which shows text to reflect the current state status change. */
export default class ForecastHeaderBanner extends React.Component<Props> {
    render() {
        const { state } = this.props
        return (
          <Text style={styles.header}>{getHeaderText(state)}</Text>
        )
    }
}
