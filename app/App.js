import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './screen/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation />
    )
  }
}

const AppNavigation = createStackNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home'
})