# SG Weather
* Fetch weather forecasts from data.gov.sg

# Implementation
* react-native + redux + flow + navigation + map + eslint + jest 

# Folder structure
* [android]: Android platform related files
* [app]: React-Native apps
    * [actions]: Redux actions
        - WeatherAction2hr.js: Actions to get 2 hours weather forecast
    * [components]: Raw components to show the data on UI
        - WeatherImageSource.js: Convert weather forecast text to image source
        - WeatherList.js: Display weather forecast as list
        - WeatherMap.js: Display weather forecast on the map
        - WeatherNavigator2hr.js: TabNavigator to switch between list and map
    * [containers]: Redux connectable components
        - AppNavigation: For screens navigation, main is DrawerNavigator
        - WeatherScreen2hr.js: 2 hours weather forecast screen
        - WeatherHeader2hr.js: Header banner to show the current state progress status
        - WeatherNavigator2hr.js: TabNavigator to show weather forecast in list or map 
    * [images]: Images resource folder
    * [reducers]: Redux Reducers
        - index.js: Combine reducers
        - Weather2hrReducer.js: Reducer for 2 hours weather forecast
    * [types]: Define flow types
        - Weather2hr.js: Flow type definition for 2 hours weather forecast related data
    * App.js: Main app module
    * AppConfig.js: Contains app configurations 
    * AppStyle.js: Defines common styles. 
* [ios]: iOS platform related files. (Not tested)
* .eslintrc: ESLint configuration
