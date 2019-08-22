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
            size={50}
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

export default HomeScreen;