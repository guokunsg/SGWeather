// @flow

import Immutable from 'seamless-immutable'
import type { NetworkAction, NetworkActionTypes, NetworkStoreStatus } from '../types/common'

export default (state: any, action: NetworkAction, dataConverter: (Object => Object),
        actionTypes: NetworkActionTypes, stateStatus: NetworkStoreStatus) => {
    switch (action.type) {
        case actionTypes.Start: {
            return Immutable({
                status: stateStatus.Loading,
                data: state.data,
                error: null,
            })
        }
        case actionTypes.DataReady: {
            try {
                return Immutable({
                    status: stateStatus.DataUpdated,
                    data: dataConverter(action.data),
                    error: null,
                })
            } catch (err) {
                console.error(err)
                return Immutable({
                    status: stateStatus.Error,
                    data: state.data,
                    error: new Error('Data error'),
                })
            }
        }
        case actionTypes.Error: {
            return Immutable({
                status: stateStatus.Error,
                data: state.data,
                error: action.error,
            })
        }
        default:
            return state
    }
}
