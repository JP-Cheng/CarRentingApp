/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './container/HomeScreen'
import Login from './container/Login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  LoggedIn: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
}


