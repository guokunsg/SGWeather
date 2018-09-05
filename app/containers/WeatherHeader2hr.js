// @flow

/** Export  */

import React from 'react'
import { connect } from 'react-redux'
import type { WeatherState2Hr } from '../types/WeatherForecast'
import ForecastHeaderBanner from '../components/ForecastHeaderBanner'

type Props = {
    weather2hr: WeatherState2Hr
}

/** Header banner which shows text to reflect the current state status change. */
export class WeatherHeader2hr extends React.Component<Props> {
    render() {
        const { weather2hr } = this.props
        return (
          <ForecastHeaderBanner state={weather2hr} />
        )
    }
}

const mapStateToProps = state => ({ weather2hr: state.weather2hr })

export default connect(mapStateToProps)(WeatherHeader2hr)
