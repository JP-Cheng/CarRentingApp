import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Driving from './Driving';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    this.socket = new WebSocket('ws://127.0.0.1:3000');
  }
  // getaccount = () => {
  // }
  render() {
    if (this.state.isLoading)
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    else
      return (
        <Driving />
      );
  }

}