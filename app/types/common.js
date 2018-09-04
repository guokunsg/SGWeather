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

/** Data of this type should define the type values to be used in redux store status. */
export type NetworkStoreStatus = {
    Init: string,
    Loading: string,
    DataUpdated: string,
    Error: string,
}
