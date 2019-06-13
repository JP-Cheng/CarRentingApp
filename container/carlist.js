import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Dimensions
} from 'react-native';
import { Appbar } from 'react-native-paper'
import StarRate from './StarRate'
// import { generateKeyPair } from 'crypto';

export default class Carlist extends React.Component {
  render() {
    const ratingObj = {
      ratings: 3,
      views: 34000
    }
    return (
      <View style={styles.container}>
        <Appbar.Header
          placement='center'
          style={styles.header}>

          <Appbar.Content
            title="You have now $100 left."
          // subtitle="You have now $100 left."
          />
        </Appbar.Header>
        <FlatList
          data={[
            { key: 'GSX-750S' },
            { key: 'CB650R' },
            { key: 'MT-07' },
            { key: 'Z650' },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Confirmation', 'Do you want this car?', [
                  {
                    text: 'NO',
                    onPress: () => console.warn('NO Pressed'),
                    style: 'cancel',
                  },
                  { text: 'YES', onPress: this.props.onLoginPress },
                ])
              }>
              <View style={styles.buttonSytle}>
                <Text style={styles.carname}>{item.key}</Text>
                <StarRate ratingObj={ratingObj} />
              </View>

            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  carname: {
    fontSize: 32
  },
  header: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
    height: 50,
  },
  headerTitle: {
    fontSize: 32
  },
  headerSubtitle: {
    fontSize: 24
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4EAE7',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  buttonSytle: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 6 - 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
