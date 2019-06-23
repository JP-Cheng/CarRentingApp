import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react'
import Driving from './Driving'
import Carlist from './carlist'
import Renting from './renting'
import App from '../App'

const tabNav = createBottomTabNavigator({
    Home: { screen: Carlist },
    Rent: { screen: Renting },
    Driving: { screen: Driving }

    // Logout: { screen: App }
});
const HomeScreen = createAppContainer(tabNav);

// const MainNavigator = createStackNavigator({
//     Home: { screen: Driving },
//     Driving: { screen: Driving },
//     Carlist: { screen: Carlist },
// });

// const HomeScreen = createAppContainer(MainNavigator);
export default HomeScreen;