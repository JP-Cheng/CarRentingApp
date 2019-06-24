import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button, Alert } from 'react-native';
// import console = require('console');

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    // alignItems: ''
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
    paddingLeft: 35,
    flexDirection: "row"
  },
  button: {
    display: "flex"
  }
});

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      curAccount: ""
    };
  }

  navigate = () => {
    this.props.navigation.navigate('Carlist',
      {
        user: this.state.userName,
        account: this.state.curAccount
      });
  }

  onLoginPress = () => {
    fetch("http://172.20.10.2:5000/GET/users")
      .then(res => res.json())
      .then(res => {
        // /*
        for (let i = 0; i < res.length; i++) {
          if (this.state.userName === res[i].name) {
            this.setState({ curAccount: res[i].account });
            break;
          }
          else if (i === res.length - 1)
            Alert.alert("No user matched!");
        }
      })
      .then(() => {
        if (this.state.curAccount !== "") {
          this.navigate();
        }
      });
    // */
    // Alert.alert(res);
    // this.setState({ isLoggedIn: true });
    // });
  }

  signUp = () => {
    fetch("http://172.20.10.2:5000/GET/users")
      .then(res => res.json())
      .then(res => {
        // /*
        for (let i = 0; i < res.length; i++) {
          if (this.state.userName === res[i].name) {
            Alert.alert('Username already exists')
          }
          else if (i === res.length - 1)
            fetch("http://172.20.10.2:5000/POST/user", {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "name": this.state.userName.toLowerCase()
              })
            })
              .then(
                Alert.alert('Sign Up Success')
              );
        }
      })
  }


  render() {
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}>

        <Text style={styles.login}>
          Rent a Car
        </Text>

        <TextInput
          placeholder="UserID"
          style={styles.textInput}
          onChangeText={text => this.setState({ userName: text.toLowerCase() })}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={styles.view}>
          <Button
            // onPress={this.onLoginPress}
            onPress={this.onLoginPress}
            styles={styles.button}
            title="Sign in"
          />
          <Button
            onPress={this.signUp}
            styles={styles.button}
            title="Sign up"
          />
        </View>
      </ScrollView>
    );
  }
}
