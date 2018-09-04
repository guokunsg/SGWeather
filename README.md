# SG Weather
* Fetch weather forecasts from data.gov.sg

# Implementation
* react-native + redux + flow + navigation + map + eslint + jest 

# Folder structure
* [android]: Android platform related files
* [app]: React-Native apps
    * [actions]: Redux actions
        - WeatherAction2hr.js: Actions to get 2 hours weather forecast
    * [components]:
        - WeatherImageSource.js: Convert weather forecast text to image source
        - WeatherList.js: Display weather forecast as list
        - WeatherMap.js: Display weather forecast on the map
        - WeatherNavigator2hr.js: TabNavigator to switch between list and map
    * [containers]:
        - AppNavigation: For screens navigation, main is drawer
        - WeatherScreen2hr.js: 2 hours weather forecast screen
    * [images]: Images resource folder
    * [reducers]:
        - index.js: Combine reducers
        - Weather2hrReducer.js: Reducer for 2 hours weather forecast
    * [types]:
        - Weather2hr.js: Flow type definition for 2 hours weather forecast related data
    * App.js: Main app module
    * AppConfig.js: Contains app configurations 
    * AppStyle.js: Defines common styles. 
* [ios]: iOS platform related files. (Not tested)
* .eslintrc: ESLint configuration
