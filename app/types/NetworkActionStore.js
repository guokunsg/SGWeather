// @flow

/** Data of this type should define the type values to be used in NetworkAction. */
export type NetworkActionTypes = {
    Start: string,
    DataReady: string,
    Error: string
}

/** The type of network action data to dispatch. */
export type NetworkAction = {
    type: string,
    data: any,
    error: ?Error
}

/** Redux store status for network data sources. */
export const NetworkStoreStatusInit = 'NetworkStoreStatusInit'
export const NetworkStoreStatusLoading = 'NetworkStoreStatusLoading'
export const NetworkStoreStatusDataUpdated = 'NetworkStoreStatusDataUpdated'
export const NetworkStoreStatusError = 'NetworkStoreStatusError'
export type NetworkStoreStatusType = typeof NetworkStoreStatusInit | typeof NetworkStoreStatusLoading |
        typeof NetworkStoreStatusDataUpdated | typeof NetworkStoreStatusError
