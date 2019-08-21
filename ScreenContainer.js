import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AppDrawerNavigator from './screens/DrawerNavigator';

const NavigationStack = createStackNavigator({
    Drawer: AppDrawerNavigator,
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },

    
    //{ initialRouteName: 'LoginScreen' }
});

const Container = createAppContainer(NavigationStack);




  

export default Container; 