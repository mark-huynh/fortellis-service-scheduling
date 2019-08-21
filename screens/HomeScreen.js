import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainList from '../MainList';
import { createDrawerNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Appointments',
  };
  render() {
    return (
      <View>
        <MainList></MainList>
      </View>
    );
  }
};

const drawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255, 255, 255, 0.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
)

export default HomeScreen;