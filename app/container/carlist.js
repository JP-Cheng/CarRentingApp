import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { Appbar } from 'react-native-paper'
import StarRate from './StarRate'
// import { Icon } from 'react-native-elements'
// import { stat } from 'fs';
// import { generateKeyPair } from 'crypto';

export default class Carlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: "",
      account: "",
      balance: 0
    }
  }

  getParam = () => {
    const { navigation } = this.props;
    const userName = navigation.getParam("user", "reserved");
    const account = navigation.getParam("account", null);
    this.setState(state => {
      state.user = userName;
      state.account = account;
      return state;
    })
  }

  async componentWillMount() {
    await this.getParam();
    // Alert.alert(this.state.account);
    this.setBalance();
    this.setCar()
  }

  setBalance = () => {
    fetch("http://localhost:5000/POST/user/balance", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "account": this.state.account
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ balance: res.balance });
      })
      .done();
  }

  setCar = () => {
    fetch('http://localhost:5000/GET/cars')
      .then((response) => response.json())
      .then((responseJson) => {
        // let list = []
        // for (let i = 0; i < responseJson.length; i++) {
        //   anItem = { key: i, entry: responseJson[i] }
        //   list.push(anItem);
        // }
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  renting = (index) => {
    fetch("http://localhost:5000/PUT/car/rent", {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": index,
        "account": this.state.account
      })
    })
      .then(
        this.props.navigation.navigate('Renting',
          {
            user: this.state.user,
            account: this.state.account,
            car: this.state.dataSource[index]
          })
      );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Appbar.Header
          placement='center'
          style={styles.header}>

          <Appbar.Content
            title={"You have now $" + this.state.balance + " left."}
          />
          {/* <Icon name="cached"
            type="material"
            size={20}
            color="#0671c6"
            onPress={() => {
              this.setBalance();
              this.setCar();
            }}
          /> */}
        </Appbar.Header>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Confirmation', 'Do you want this car?', [
                  {
                    text: 'NO',
                    onPress: () => console.warn('NO Pressed'),
                    style: 'cancel',
                  },
                  { text: 'YES', onPress: () => this.renting(index) },
                ])
              }>
              <View style={styles.buttonSytle}>
                <Text style={styles.carname}>{item.Name}</Text>
                <StarRate rating={item.Rate} />
                <Text>({item.Rate.toPrecision(3)})</Text>
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
