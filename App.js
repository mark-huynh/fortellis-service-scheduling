import React, { Component } from 'react';
import Container from './ScreenContainer';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <Container />
    );
  }
};




