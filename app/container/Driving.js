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
  constructor(props) {
    super(props);

    this.state = {
      carID: -1,
      account: ''
    }
  }
  async componentWillMount() {
    const { navigation } = this.props;
    const carID = navigation.getParam('carID');
    const account = navigation.getParam('account');

    await this.setState(state => {
      state.carID = carID;
      state.account = account;
      return state;
    });
    // Alert.alert(this.state.carName);
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}> Driving... </Text>
        <Keyboard />
        {/* socket={this.state.socket} /> */}
        <Button
          onPress={() => this.props.navigation.navigate("RatingPage",
            {
              carID: this.state.carID,
              account: this.state.account
            })}
          title="Return this car."
        />
      </ScrollView>
    );
  }
}

