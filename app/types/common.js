// @flow

/** The data should define the type values to be used in NetworkAction. */
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
