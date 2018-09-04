// @flow

/** Export  */

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text } from 'react-native'
import type { W2HrState } from '../types/Weather2hr'
import { formatDate } from '../utils/Utils'
import { W2HR_STATE_LOADING, W2HR_STATE_DATA_REFRESHED, W2HR_STATE_ERROR }
    from '../reducers/Weather2hrReducer'

// Get the header text based on the current state status
function getHeaderText(state: W2HrState): string {
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

export const styles = StyleSheet.create({
    header: {
        textAlign: 'left',
        backgroundColor: '#F5FCFF',
        padding: 4,
        paddingLeft: 16,
    },
})

type Props = {
    weather2hr: W2HrState
}

/** Header banner which shows text to reflect the current state status change. */
export class WeatherHeader2hr extends React.Component<Props> {
    componentDidMount() {
    }

    render() {
        const { weather2hr } = this.props
        return (
          <Text style={styles.header}>{getHeaderText(weather2hr)}</Text>
        )
    }
}

const mapStateToProps = state => ({ weather2hr: state.weather2hr })

export default connect(mapStateToProps)(WeatherHeader2hr)
