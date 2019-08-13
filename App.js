import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import routeTimer from './pages/Timer';
import routeConfiguration from './pages/Configuration';

const AppNavigator = createStackNavigator({
  "RouteTimer": routeTimer,
  "RouteConfiguration": routeConfiguration,
});

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}