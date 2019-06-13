import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Button,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalButtonContainer: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
});


export default class Keyboard extends React.Component {

  _onPressUp = () => {
    Alert.alert('Move Forward');
  }
  _onPressDown = () => {
    Alert.alert('Move Backward');
  }
  _onPressRight = () => {
    Alert.alert('Turn Right');
  }
  _onPressLeft = () => {
    Alert.alert('Trun Left');
  }
  _onPressPause = () => {
    Alert.alert('pause');
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={this._onPressUp}>
          <Icon name='ios-arrow-up' size={80} />
        </TouchableOpacity>

        <View style={styles.horizontalButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={this._onPressLeft}>
            <Icon name='ios-arrow-back' size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._onPressPause}>
            <Icon name='ios-pause' size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._onPressRight}>
            <Icon name='ios-arrow-forward' size={80} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={this._onPressDown}>
          {/*<Image source={Down} style={styles.button} />*/}
          <Icon name='ios-arrow-down' size={80} />
        </TouchableOpacity>

      </View>
    );
  }
}
