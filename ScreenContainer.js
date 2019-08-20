import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const NavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    //{ initialRouteName: 'LoginScreen' }
});

const Container = createAppContainer(NavigationStack);

export default Container; 