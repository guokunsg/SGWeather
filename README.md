# SG Weather
* Fetch weather forecasts from data.gov.sg

# Implementation
* react-native + redux + flow + navigation + map + eslint + jest 

# Folder structure
* [android]: Android platform related files
* [app]: React-Native apps
    * [actions]: Redux actions
        - NetworkAction.js: Action to fetch network JSON data
        - WeatherAction2hr.js: Actions to get 2 hours weather forecast
        - WeatherAction24hr.js: Actions to get 24 hours weather forecast
    * [components]: Raw components to show the data on UI
        - ForecastDetails.js: Display 24 hours weather forecast details
        - ForecastHeaderBanner.js: Display the current store status. Should be connected in a separate container to reflect the status change only. 
        - PeriodForecast.js: Display a period forecast in the 24 hours forecast.
        - WeatherImageSource.js: Convert weather forecast text to image source
        - WeatherList.js: Display weather forecast as list
        - WeatherMap.js: Display weather forecast on the map
    * [containers]: Redux connectable components
        - AppNavigation: For screens navigation, main is DrawerNavigator
        - WeatherHeader2hr.js: Display the current store status. Response to the status change in redux store
        - WeatherNavigator2hr.js: TabNavigator to show weather forecast in list or map. Response to the data change in redux store.
        - WeatherScreen2hr.js: 2 hours weather forecast screen. Dispatch refresh action
        - WeatherScreen24hr.js: 24 hours weather forecast screen.
    * [images]: Images resource folder
    * [reducers]: Redux Reducers
        - index.js: Combine reducers
        - NetworkReducer.js: General reducer to map network actions to store states
        - WeatherReducer2hr.js: Reducer for 2 hours weather forecast
        - WeatherReducer24hr.js: Reducer for 24 hours weather forecast
    * [types]: Define flow types
        - NetworkActionStore.js: Flow type definition for generic network action and store state
        - WeatherForecast.js: Flow type definition for weather forecast related data
    * App.js: Main app module
    * AppConfig.js: Contains app configurations 
    * AppStyle.js: Defines common styles. 
* [ios]: iOS platform related files. (Not tested)
* .eslintrc: ESLint configuration
