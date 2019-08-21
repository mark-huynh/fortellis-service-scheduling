import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainList from '../MainList';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from 'react-navigation';

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
});

export default AppDrawerNavigator;