import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Rating } from 'react-native-elements';

export default class RatingPage extends Component {
  Report = (rating) => {
    fetch('http://localhost:5000/PUT/car/return', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        account: '',
        oil: 10,
        crashes: 0,
        rate: rating
      }),
    });
  }
  ratingCompleted(rating) {
    Alert.alert('Confirmation', 'Are you sure to give this rating?', [
      {
        text: 'NO',
        onPress: () => console.warn('NO Pressed'),
        style: 'cancel',
      },
      { text: 'YES', onPress: Report(rating) },
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          imageSize={60}
          style={{ paddingVertical: 10 }}
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
