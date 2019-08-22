import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddEventScreen from './AddEventScreen';
import CustomerScreen from './CustomerScreen';
import CardInfo from './CardInfo';

const NavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    AddEventScreen: { screen: AddEventScreen },
    CustomerScreen: { screen: CustomerScreen },
    CardInfo: { screen: CardInfo }

});

const Container = createAppContainer(NavigationStack);




  

export default Container; 