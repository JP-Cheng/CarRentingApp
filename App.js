/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Login from './container/Login'
// import Driving from './container/Driving'
// import Carlist from './container/carlist'
import HomeScreen from './container/HomeScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// type Props = {};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isDriving: false
    }
  }

  onLoginPress = () => {
    this.setState({ isLoggedIn: true });
  }

  onLogoutPress = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {


    if (this.state.isLoggedIn)
      return (
        <HomeScreen />
      );
    else return (
      <Login
        onLoginPress={this.onLoginPress}
      />
    );
  }
}

