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


export default class Renting extends Component {
    // socket = new WebSocket('ws://172.20.10.9:6000');
    constructor(props) {
        super(props);

        this.state = {
            user: "owner",
            account: "0x4304805b01a5F394595A09Cca064E32aA15c59A9",
            carID: 1,
            carName: ["haha"]
        }
    }

    // update = async () => {
    //     const { navigation } = this.props;
    //     const userName = navigation.getParam("user", "reserved");
    //     const account = navigation.getParam("account", null);
    //     const car = navigation.getParam("car", null);
    //     await this.setState(state => {
    //         state.user = userName;
    //         state.account = account;
    //         state.carID = car.ID;
    //         state.carName.push(car.Name);
    //         return state;
    //     });
    //     Alert.alert(this.state.carName);
    // }

    confirm = () => {
        // if (this.socket.readyState == this.socket.OPEN) {
        //     // let account = this.state.account;
        //     // let toSend = { index, account }
        //     this.socket.send(this.state.account);
        // }
        // let token = await this.socket.onmessage(e => {
        //     return e.data;
        // });
        let token = "yes";
        if (token === "yes")
            this.props.navigation.navigate('Driving');

    }

    render() {
        // this.update();
        return (
            <View style={styles.container}>
                <Appbar.Header
                    placement='center'
                    style={styles.header}>

                    <Appbar.Content
                        title={"Tap the car to start."}
                    />
                </Appbar.Header>

                <FlatList
                    data={this.state.carName}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                Alert.alert('Confirmation', 'Do you want to start driving?', [
                                    {
                                        text: 'NO',
                                        onPress: () => console.warn('NO Pressed'),
                                        style: 'cancel',
                                    },
                                    { text: 'YES', onPress: () => this.confirm() },
                                ])
                            }>
                            <View style={styles.buttonSytle}>
                                <Text style={styles.carname}>{item}</Text>
                                {/* <StarRate ratingObj={item.Rate} /> */}
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}