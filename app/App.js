

import React from 'react'
import { View, YellowBox, StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { AppNavigation } from './containers/AppNavigation'
import reducer from './reducers'
import appStyle from './AppStyle'

// Just ignore the warning. https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={appStyle.systemStatusBarColor} />
        <AppNavigation />
      </View>
    </Provider>
    )
}
