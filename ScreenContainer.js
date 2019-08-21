import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const NavigationStack = createStackNavigator({
    //Drawer: AppDrawerNavigator,
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
});

const Container = createAppContainer(NavigationStack);




  

export default Container; 