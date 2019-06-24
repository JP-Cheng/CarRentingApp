import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

export default class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.ratingCompleted = this.ratingCompleted.bind(this);
    this.state = {
      carID: -1,
      account: ''
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    const carID = navigation.getParam('carID');
    const account = navigation.getParam('account');

    this.setState(state => {
      state.carID = carID;
      state.account = account;
      return state;
    });
  }

  ratingCompleted(rating) {
    Alert.alert('Confirmation', 'Are you sure to give a rating of ' + rating + '?', [
      {
        text: 'NO',
        onPress: () => console.warn('NO Pressed'),
        style: 'cancel',
      },
      {
        text: 'YES', onPress: () => {
          fetch('http://172.20.10.2:5000/PUT/car/return', {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: this.state.carID,
              account: this.state.account,
              oil: 10,
              crashes: 0,
              rate: rating
            })
          })
            .then(Alert.alert("Thank you for renting our car :)"))
            .then(this.props.navigation.navigate("Carlist"));
        }
      },
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
          onFinishRating={this.ratingCompleted}
          defaultRating={3}
          size={20}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
});
