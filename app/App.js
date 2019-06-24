/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './container/Login'
import Carlist from './container/carlist'
import Renting from './container/renting'
import Driving from './container/Driving'
import RatingPage from './container/RatingPage'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: () => ({
      title: null,
      headerBackTitle: `Logout`
    })
  },
  Carlist: {
    screen: Carlist,
    navigationOptions: () => ({
      title: `Choose a Car to Rent`,
      headerBackTitle: `Car List`
    })
  },
  Renting: {
    screen: Renting,
    navigationOptions: () => ({
      title: `Rented Car`,
      headerBackTitle: null,
      headerLeft: null
    }),
  },
  Driving: {
    screen: Driving,
    navigationOptions: () => ({
      title: `Driving`,
      headerBackTitle: null,
      headerLeft: null
    })
  },
  RatingPage: {
    screen: RatingPage, navigationOptions: () => ({
      title: "How do you feel?",
      headerBackTitle: null,
      headerLeft: null
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
}


