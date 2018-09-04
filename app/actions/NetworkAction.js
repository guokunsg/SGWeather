// @flow

import axios from 'axios'
import type { Dispatch as ReduxDispatch } from 'redux'
import { hasConnection } from '../utils/Utils'
import type { NetworkActionTypes, NetworkAction } from '../types/common'

function dispatchAction(dispatch: ReduxDispatch, type: string, data: any, error: ?Error) : NetworkAction {
    return dispatch({ type, data, error })
}

/**
 * Fetch data from server and dispatch actions
 * @param {string} url
 *      Url to get data
 * @param {ReduxDispatch} dispatch
 *      Redux dispatch
 * @param {NetworkActionTypes} action
 *      The action types to dispatch
 */
export function fetchData(url: string, dispatch: ReduxDispatch, action: NetworkActionTypes) {
    console.debug('Start fetching data ...')
    hasConnection()
        .then((connected) => {
            if (!connected) {
                dispatchAction(dispatch, action.Error, null, new Error('No network'))
                return false
            }
            dispatchAction(dispatch, action.Start, null, null)
            return axios.get(url)
                    .then((res) => { dispatchAction(dispatch, action.DataReady, res.data, null) })
        })
        .catch((err) => {
            console.error(err)
            dispatchAction(dispatch, action.Error, null, err)
        })
}

export default { fetchData }
