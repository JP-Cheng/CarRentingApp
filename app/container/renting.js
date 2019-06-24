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

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            account: "",
            carID: 1,
            carName: []
        }
    }

    async componentWillMount() {
        const { navigation } = this.props;
        const userName = navigation.getParam("user", "reserved");
        const account = navigation.getParam("account", null);
        const car = navigation.getParam("car", null);
        // Alert.alert("alive");
        await this.setState(state => {
            state.user = userName;
            state.account = account;
            state.carID = car.ID;
            state.carName.push(car.Name);
            return state;
        });
        // Alert.alert(this.state.carName);
    }

    confirm = () => {
        // let socket = new WebSocket('ws://172.20.10.9:6000');
        // // socket.onopen(e => {

        // // })
        // if (socket.readyState == socket.OPEN) {
        //     // let account = this.state.account;
        //     // let toSend = { index, account }
        //     socket.send(state.account);
        // }
        // let token = await socket.onmessage(e => {
        //     return e.data;
        // });
        let token = "yes";
        if (token === "yes")
            this.props.navigation.navigate('Driving', {
                carID: this.state.carID,
                account: this.state.account
            });//,
        // { socket });

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