import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddEventScreen from './AddEventScreen';

const NavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    AddEventScreen: { screen: AddEventScreen },
});

const Container = createAppContainer(NavigationStack);




  

export default Container; 