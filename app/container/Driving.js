import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Keyboard from './Keyboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 50,
    color: 'black',
    marginTop: 100
  }

});

export default class Driving extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}> Driving... </Text>
        <Keyboard />
        {/* <Button
          onPress={this.props.onLogoutPress}
          title="Logout"
        /> */}
      </ScrollView>
    );
  }
}

