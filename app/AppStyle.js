// @flow

import { StyleSheet } from 'react-native'
import Immutable from 'seamless-immutable'

/** Header action bar style */
const headerBarStyle = {
    headerStyle: {
        backgroundColor: '#0277BD',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

/** The style options for the bottom TabNavigator */
const bottomTabBarOption = {
    labelStyle: {
        fontSize: 18,
    },
    tabStyle: {
        height: 40,
    },
}

/** General styles */
const styles = StyleSheet.create({
    /** Header action bar button style. */
    headerBarButton: {
        width: 32,
        height: 32,
        padding: 4,
        marginRight: 8,
    },
})

export default Immutable({
    styles,
    headerBarStyle,
    bottomTabBarOption,
    /** The color for the system status bar above the header action bar */
    systemStatusBarColor: '#0277BD',
    /** Main view background color */
    mainBackgroundColor: '#F5FCFF',
    /** Banner style text background color */
    bannerBackgroundColor: '#dcf4ff',
})
