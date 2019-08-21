import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainList from '../MainList';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <MainList></MainList>
          <Ionicons
            name="ios-add-circle-outline"
            size={600}
            color="green"Î
            style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
            }}

          />
      </View>
    );
  }
};

// const drawerNavigator = createDrawerNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: 'rgba(255, 255, 255, 0.9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#6b52ae',
//     },
//   }
// )

export default HomeScreen;