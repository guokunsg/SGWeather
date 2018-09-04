// @flow

import { NetInfo } from 'react-native'

// Format the date to display. Format: YY-MM-DD HH:MM
export function formatDate(date: Date) {
    /* eslint-disable prefer-template */
    return (date.getFullYear() % 100)
            + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '-' + ('0' + date.getDate()).slice(-2)
            + ' ' + ('0' + date.getHours()).slice(-2)
            + ':' + ('0' + date.getMinutes()).slice(-2)
    /* eslint-disable prefer-template */
}

/**
 * Returns a Promise to check whether the device has connection
 */
export function hasConnection(): Promise<boolean> {
    return NetInfo.getConnectionInfo()
        .then((info) => {
            if (info.type === 'unknown' || info.type === 'none' || !info.type) {
                return false
            }
            return true
        })
}

export default { formatDate }
