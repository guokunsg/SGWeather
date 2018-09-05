// @flow

import Immutable from 'seamless-immutable'
import { NetworkStoreStatusLoading, NetworkStoreStatusDataUpdated,
        NetworkStoreStatusError } from '../types/NetworkActionStore'
import type { NetworkAction, NetworkActionTypes } from '../types/NetworkActionStore'

export default (state: any, action: NetworkAction, dataConverter: (Object => Object),
        actionTypes: NetworkActionTypes) => {
    switch (action.type) {
        case actionTypes.Start: {
            return Immutable({
                status: NetworkStoreStatusLoading,
                data: state.data,
                error: null,
            })
        }
        case actionTypes.DataReady: {
            try {
                return Immutable({
                    status: NetworkStoreStatusDataUpdated,
                    data: dataConverter(action.data),
                    error: null,
                })
            } catch (err) {
                console.error(err)
                return Immutable({
                    status: NetworkStoreStatusError,
                    data: state.data,
                    error: new Error('Data error'),
                })
            }
        }
        case actionTypes.Error: {
            return Immutable({
                status: NetworkStoreStatusError,
                data: state.data,
                error: action.error,
            })
        }
        default:
            return state
    }
}
