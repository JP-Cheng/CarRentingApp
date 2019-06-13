import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react'
import Driving from './Driving'
import Carlist from './carlist'
import Login from './Login'

const tabNav = createBottomTabNavigator({
    Home: { screen: Carlist },
    Driving: { screen: Driving },
    Lougout: { screen: Login }
});
const HomeScreen = createAppContainer(tabNav);

// const MainNavigator = createStackNavigator({
//     Home: { screen: Driving },
//     Driving: { screen: Driving },
//     Carlist: { screen: Carlist },
// });

// const HomeScreen = createAppContainer(MainNavigator);
export default HomeScreen;