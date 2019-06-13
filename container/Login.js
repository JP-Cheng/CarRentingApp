import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';

const styles = {
  scrollView: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    alignItems: ''
  },
  login: {
    fontSize: 40,
    paddingLeft: 40,
    paddingBottom: 15
  },
  textInput: {
    fontSize: 27,
    paddingLeft: 70
  },
  view: {
    paddingLeft: 35
  }
}

export default class Login extends React.Component {

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}>

        <Text style={styles.login}>
          Login
        </Text>

        <TextInput
          placeholder="UserID"
          style={styles.textInput}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <View style={styles.view}>
          <Button
            onPress={this.props.onLoginPress}
            styles={styles.button}
            title="Submit"
          />
        </View>
      </ScrollView>
    );
  }
}
